import classNames from "classnames";
import React, { SyntheticEvent } from "react";
import fetcher from "../../../utils/fetcher";
import DraftIcon from "../../icons/Draft";
import Icon from "../../icons/Icon";
import PublishedIcon from "../../icons/Published";

import styles from "./ArticleList.module.css";

const ArticleList = ({ posts = [], onArticleLoaded }) => {
  const [activeSlug, setActiveSlug] = React.useState<string>(null);
  const loadFile = async (event: SyntheticEvent, slug: string) => {
    event.preventDefault();
    setActiveSlug(slug);

    await fetcher(`/api/posts/${slug}?preview=true`, {}).then(onArticleLoaded);
  };

  return (
    <div className={styles.listWrapper}>
      <h3>
        Posts
        <span className="tag" style={{ marginLeft: "1rem" }}>
          {posts.filter(({ hidden }) => hidden !== true).length}
        </span>
      </h3>

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
