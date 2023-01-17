import { useEffect, useState } from "react";
import classNames from "classnames";
import Icon from "../../icons/Icon";
import PreviewIcon from "../../icons/Preview";
import FullscreenIcon from "../../icons/Fullscreen";
import CloseFullscreenIcon from "../../icons/CloseFullscreen";
import EditIcon from "../../icons/Edit";

import styles from "./Topline.module.css";
import CancelIcon from "../../icons/Cancel";

const Topline = ({
  post,
  onTitleChange,
  onSlugChange,
  isFullscreen,
  onFullscreenChange,
}) => {
  const [isEditUrl, setIsEditUrl] = useState<boolean>(false);
  const [slug, setSlug] = useState<string>(post.slug);

  useEffect(() => setSlug(post.slug), [post.slug]);

  return (
    <>
      <div className={styles.title}>
        <input
          type="text"
          value={post.title}
          className="typography--h3 input"
          onChange={onTitleChange}
        />

        <button
          className={styles.buttonFullscreen}
          onClick={onFullscreenChange}
        >
          <Icon width={48} height={48}>
            {isFullscreen ? <CloseFullscreenIcon /> : <FullscreenIcon />}
          </Icon>
        </button>
      </div>

      <div style={{ display: "flex" }}>
        <div
          className={classNames("typography--body2", styles.withEditButton)}
          style={{
            marginBottom: "2rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <p>https://drublic.de/blog/</p>
          {isEditUrl ? (
            <>
              <input
                type="text"
                className={classNames("typography--code", styles.urlInput)}
                value={slug}
                style={{
                  width: `calc(${post.slug.length}ch + 1.125rem)`,
                }}
                onChange={(event) => setSlug(event.target.value)}
                autoFocus
              />
              <button
                className="button button--small"
                onClick={() => {
                  onSlugChange(slug);
                  setIsEditUrl(false);
                }}
              >
                Save
              </button>
              <button
                className={classNames("button--icon")}
                onClick={() => setIsEditUrl(false)}
                style={{
                  bottom: "-0.125rem",
                  position: "relative",
                  marginLeft: "0.25rem",
                }}
              >
                <Icon width={24} height={24}>
                  <CancelIcon />
                </Icon>
              </button>
            </>
          ) : (
            <>
              <code onClick={() => setIsEditUrl(true)}>
                {post.slug ?? "..."}
              </code>
              <button
                className={classNames(
                  "button--icon",
                  styles.editButton,
                  styles.editButtonUrl
                )}
                onClick={() => setIsEditUrl(true)}
              >
                <Icon width={20} height={20}>
                  <EditIcon />
                </Icon>
              </button>
            </>
          )}
        </div>

        {post.slug && (
          <>
            <div style={{ flex: 1 }}></div>
            <div>
              <a
                href={`/blog/${post.slug}?preview=true`}
                target="drublic:preview"
                className={classNames("button button--small")}
              >
                <Icon width={24} height={24}>
                  <PreviewIcon />
                </Icon>
                Preview
              </a>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Topline;
