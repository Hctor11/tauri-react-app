import { Editor } from "@monaco-editor/react";
import { useEffect, useState } from "react";
import { useSnippetStore } from "../store/SnippetStore";
import { writeTextFile } from "@tauri-apps/api/fs";
import { desktopDir } from "@tauri-apps/api/path";

const SnippetEditor = () => {
  const selectedSnippet = useSnippetStore((state) => state.selectedSnippet);
  const [text, setText] = useState<string | undefined>("");

  useEffect(() => {
    if (!selectedSnippet) return;

    const savedText = setTimeout(async () => {
      const dektopDirectory = await desktopDir();

      await writeTextFile(
        `${dektopDirectory}/snippets/${selectedSnippet.name}.txt`,
        text ?? ""
      );
    }, 1000);

    return () => {
      clearTimeout(savedText);
    };
  }, [text]);

  return (
    <>
      {selectedSnippet ? (
        <Editor
          onChange={(value) => setText(value)}
          value={selectedSnippet.code ?? ""}
        />
      ) : (
        <h1>No Snipped Selected</h1>
      )}
    </>
  );
};

export default SnippetEditor;
