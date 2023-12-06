import { Editor } from "@monaco-editor/react";
import { useSnippetStore } from "../store/SnippetStore";

const SnippetEditor = () => {
  const selectedSnippet = useSnippetStore((state) => state.selectedSnippet);
  const setSelectedSnippet = useSnippetStore(
    (state) => state.setSelectedSnippet
  );
    return (
      <>
        {
          selectedSnippet ? (
          <Editor />
          ) : (
            <h1>No Snipped Selected</h1>
          )
        }
      </>
    )
};

export default SnippetEditor;
