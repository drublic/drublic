import { useState } from "react";
import LoadingIcon from "../../icons/Loading";
import Icon from "../../icons/Icon";

import styles from "./Toolbar.module.css";
import articleListStyles from "../ArticleList/ArticleList.module.css";
import Toggle from "../Toggle";
import classNames from "classnames";

const occurrences = (input: string[]) =>
  input.reduce((acc, curr) => {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
  }, {});

interface ToolbarProps {
  posts: any[];
  currentPost: any;
  isSaving: boolean;
  onSave: (slug: string) => Promise<void>;
  setCurrentPost: (post: any) => void;
}

const Toolbar = ({
  posts,
  currentPost,
  isSaving,
  onSave,
  setCurrentPost,
}: ToolbarProps) => {
  const [isTagsOpen, setIsTagsOpen] = useState<boolean>(false);
  const tags = posts.flatMap(({ tags }) => (tags ? tags : [])).sort();

  return (
    <div className={styles.toolbar}>
      <button
        className={classNames(
          "button button--outline",
          styles.saveButton,
          articleListStyles.editButton,
          {
            [styles.buttonDisabled]: isSaving,
          }
        )}
        type="button"
        onClick={() => onSave(currentPost.slug)}
      >
        Save
      </button>

      {isSaving && (
        <Icon width={32} height={32}>
          <LoadingIcon />
        </Icon>
      )}

      <h3>Tags</h3>
      {currentPost.tags ? (
        <p>
          {currentPost.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </p>
      ) : (
        <>
          <p>
            <button
              className={`button button--small ${articleListStyles.editButton}`}
              onClick={() => setIsTagsOpen(true)}
            >
              Add Tags
            </button>
          </p>

          {isTagsOpen && (
            <p>
              {Object.entries(occurrences(tags)).map(([tag]) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </p>
          )}
        </>
      )}

      <h3>Publishing Date</h3>
      <p>{currentPost.date}</p>

      <h3>Status</h3>
      <p>
        <span className={`tag ${currentPost.hidden ? "tag--light" : ""}`}>
          {currentPost.hidden ? "Draft" : "Published"}
        </span>
        <button
          className={`button button--small ${articleListStyles.editButton}`}
          onClick={() => {
            const updatedPost = { ...currentPost, hidden: !currentPost.hidden };
            setCurrentPost(updatedPost);
            onSave(currentPost.slug);
          }}
          style={{ marginLeft: "0.5rem" }}
        >
          {currentPost.hidden ? "Publish" : "Unpublish"}
        </button>
      </p>

      <h3>Image</h3>
      {currentPost.image ? (
        <figure
          className="image image--full"
          style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
        >
          <img
            src={currentPost.image.replace("https://www.hansreinl.de/", "/")}
          />
        </figure>
      ) : (
        <p>
          <i>No image set.</i>
        </p>
      )}

      <h3>Abstract</h3>
      <Toggle>
        <div
          dangerouslySetInnerHTML={{
            __html: currentPost.abstract ?? "<i>No abstract.</i>",
          }}
        />
      </Toggle>

      <h3>Meta Data</h3>

      <h4 style={{ marginBottom: "0.25rem" }}>
        Title
        {currentPost["meta-title"] && (
          <span
            className="tag"
            style={{ fontSize: "1rem", marginLeft: "1rem" }}
          >
            {currentPost["meta-title"].length}
          </span>
        )}
      </h4>
      <p>{currentPost["meta-title"] ?? <i>No meta title.</i>}</p>

      <h4 style={{ marginBottom: "0.25rem" }}>
        Description
        {currentPost["meta-description"] && (
          <span
            className="tag"
            style={{ fontSize: "1rem", marginLeft: "1rem" }}
          >
            {currentPost["meta-description"].length}
          </span>
        )}
      </h4>
      <p>{currentPost["meta-description"] ?? <i>No description.</i>}</p>
    </div>
  );
};

export default Toolbar;
