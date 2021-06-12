import React from "react";

const BlogMessage = () => (
  <div className="message">
    <div className="message__content">
      <p>
        <a href="/feed" target="_blank">
          Subscribe to the feed now
        </a>{" "}
        and don’t miss any update
        <b className="message__divider">and</b>
        <a href="https://twitter.com/drublic">follow on Twitter</a>.
      </p>
    </div>
  </div>
);

export default BlogMessage;
