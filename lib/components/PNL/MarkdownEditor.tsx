import React, { FC, ForwardedRef, forwardRef } from "react";
import { Editor } from "@toast-ui/react-editor";

import "@toast-ui/editor/dist/toastui-editor.css";

type Props = {
  onChange: () => void;
  height?: number;
  forwardedRef?: ForwardedRef<Editor>;
};

const MarkdownEditor: FC<Props> = ({ forwardedRef, onChange }) => (
  <div
    style={{
      marginLeft: "-1.5rem",
      marginRight: "-1.5rem",
    }}
  >
    <style
      dangerouslySetInnerHTML={{
        __html: `
        .toastui-editor-defaultUI {
          border: 0;
        }

        .toastui-editor-defaultUI .toastui-editor-md-tab-container,
        .toastui-editor-defaultUI-toolbar {
          background: transparent;
        }

        .toastui-editor-defaultUI .toastui-editor-md-tab-container {
          display: none !important;
        }
      `,
      }}
    />
    <Editor
      previewStyle="tab"
      height="auto"
      initialEditType="markdown"
      useCommandShortcut={true}
      usageStatistics={false}
      ref={forwardedRef}
      onChange={onChange}
      hideModeSwitch
    />
  </div>
);

export default MarkdownEditor;
