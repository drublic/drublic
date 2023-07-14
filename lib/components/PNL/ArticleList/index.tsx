import classNames from "classnames";
import React, { SyntheticEvent } from "react";
import fetcher from "../../../utils/fetcher";
import DraftIcon from "../../icons/Draft";
import Icon from "../../icons/Icon";
import PublishedIcon from "../../icons/Published";

import styles from "./ArticleList.module.css";

const ArticleList = ({ posts = [], onPostLoaded, onPostCreated }) => {
  const [activeSlug, setActiveSlug] = React.useState<string>(null);
  const loadFile = async (event: SyntheticEvent, slug: string) => {
    event.preventDefault();
    setActiveSlug(slug);

    await fetcher(`/api/posts/${slug}?preview=true`, {}).then(onPostLoaded);
  };

  const createPost = async (slug: string) => {
    await fetcher(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({
        slug,
      }),
    }).then(onPostCreated);
  };

  return (
    <div className={styles.listWrapper}>
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
          className="button button--small"
          onClick={() => createPost(new Date().toISOString())}
        >
          Create New Post
        </button>
      </p>

      <ul className={styles.list}>
        {posts?.map(({ title, slug, date, hidden }) => (
          <li
            key={slug}
            className={classNames(styles.listItem, {
              [styles.listItemIsActive]: activeSlug === slug,
              [styles.listItemIsDraft]: hidden,
            })}
          >
            <a
              href="/"
              title={title}
              onClick={(event) => loadFile(event, slug)}
              className={styles.listLink}
            >
              <Icon width={24} height={24} className={styles.listLinkIcon}>
                {hidden ? <DraftIcon /> : <PublishedIcon />}
              </Icon>

              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ArticleList;
