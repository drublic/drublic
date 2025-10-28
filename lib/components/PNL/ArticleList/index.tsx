import classNames from "classnames";
import React from "react";
import fetcher from "../../../utils/fetcher";
import DraftIcon from "../../icons/Draft";
import Icon from "../../icons/Icon";
import PublishedIcon from "../../icons/Published";
import { getDate } from "../../../utils/date";

import styles from "./ArticleList.module.css";
import Link from "next/link";

const ArticleList = ({
  posts = [],
  activeSlug,
  onPostCreated,
  isOverview = false,
}) => {
  const createPost = async (slug: string) => {
    await fetcher(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({
        slug,
      }),
    }).then(onPostCreated);
  };

  return (
    <div
      className={classNames(styles.listWrapper, {
        [styles.listWrapperOverview]: isOverview,
      })}
    >
      {!isOverview && (
        <>
          <h3>
            Posts
            <span className="tag" style={{ marginLeft: "1rem" }}>
              {posts.filter(({ hidden }) => hidden !== true).length}
            </span>
            <span className="tag tag--light">
              {posts.filter(({ hidden }) => hidden).length}
            </span>
          </h3>

          <p style={{ marginBottom: "1rem" }}>
            <button
              className={`button button--small ${styles.editButton}`}
              onClick={() => createPost(new Date().toISOString())}
            >
              Create New Post
            </button>
          </p>
        </>
      )}

      {isOverview && (
        <div className={styles.overviewHeader}>
          <h2>Articles ({posts.length})</h2>
          <button
            className={`button button--primary ${styles.editButton}`}
            onClick={() => createPost(new Date().toISOString())}
          >
            Create New Post
          </button>
        </div>
      )}

      {isOverview ? (
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tableHeaderCell}>Title</th>
              <th className={styles.tableHeaderCell}>Status</th>
              <th className={styles.tableHeaderCell}>Date</th>
              <th className={styles.tableHeaderCell}>Tags</th>
              <th className={styles.tableHeaderCell}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts?.map(({ title, slug, date, hidden, tags, abstract }) => (
              <tr
                key={slug}
                className={classNames(styles.tableRow, {
                  [styles.tableRowIsActive]: activeSlug === slug,
                  [styles.tableRowIsDraft]: hidden,
                })}
              >
                <td className={styles.tableCell} data-label="Title">
                  <Link
                    href={`/__pnl/${slug}`}
                    title={title}
                    className={styles.listLink}
                  >
                    <div className={styles.listItemHeader}>
                      <span className={styles.listItemTitle}>{title}</span>
                    </div>
                    {abstract && (
                      <p className={styles.listItemAbstract}>
                        {abstract.replace(/<[^>]*>/g, "").substring(0, 80)}
                        {abstract.length > 80 && "..."}
                      </p>
                    )}
                  </Link>
                </td>

                <td className={styles.tableCell} data-label="Status">
                  <span
                    className={`tag ${
                      hidden ? "tag--draft" : "tag--published"
                    }`}
                  >
                    {hidden ? "Draft" : "Published"}
                  </span>
                </td>

                <td className={styles.tableCell} data-label="Date">
                  <span className={styles.listItemDate}>
                    {getDate(date).toLocaleDateString("de-DE", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </span>
                </td>

                <td className={styles.tableCell} data-label="Tags">
                  {tags && tags.length > 0 && (
                    <div className={styles.listItemTags}>
                      {tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="tag tag--small">
                          {tag}
                        </span>
                      ))}
                      {tags.length > 2 && (
                        <span className="tag tag--small">
                          +{tags.length - 2}
                        </span>
                      )}
                    </div>
                  )}
                </td>

                <td className={styles.tableCell} data-label="Actions">
                  <Link href={`/__pnl/${slug}`}>
                    <button
                      className={`button button--small ${styles.editButton}`}
                    >
                      Edit
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <ul className={styles.list}>
          {posts?.map(({ title, slug, date, hidden, tags, abstract }) => (
            <li
              key={slug}
              className={classNames(styles.listItem, {
                [styles.listItemIsActive]: activeSlug === slug,
                [styles.listItemIsDraft]: hidden,
              })}
            >
              <Link
                href={`/__pnl/${slug}`}
                title={title}
                className={styles.listLink}
              >
                <div className={styles.listItemContent}>
                  <div className={styles.listItemHeader}>
                    <Icon
                      width={20}
                      height={20}
                      className={styles.listLinkIcon}
                    >
                      {hidden ? <DraftIcon /> : <PublishedIcon />}
                    </Icon>
                    <span className={styles.listItemTitle}>{title}</span>
                    <span className={styles.listItemDate}>
                      {getDate(date).toLocaleDateString("de-DE", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {posts.length === 0 && (
        <div className={styles.emptyState}>
          <p>No articles found.</p>
          {isOverview && (
            <button
              className={`button button--primary ${styles.editButton}`}
              onClick={() => createPost(new Date().toISOString())}
            >
              Create Your First Post
            </button>
          )}
        </div>
      )}
    </div>
  );
};
export default ArticleList;
