import { readDir } from "@tauri-apps/api/fs";
import { useEffect } from "react";
import { desktopDir } from "@tauri-apps/api/path";
import { useSnippetStore } from "../store/SnippetStore";
import SnippetItem from "./SnippetItem";

const SnippetList = () => {
  const setSnippetsNames = useSnippetStore((state) => state.setSnippetNames);
  const snippestNames = useSnippetStore((state) => state.snippestNames);

  useEffect(() => {
    const loadFiles = async () => {
      const dektopDirectory = await desktopDir();
      const res = await readDir(`${dektopDirectory}/snippets`);
      const filenames = res.map((item) => item.name!);
      setSnippetsNames(filenames);
    };
    loadFiles();
  }, []);

  return (
    <div>
      {snippestNames.map((name) => (
        <SnippetItem key={name} SnippetName={`${name}`} />
      ))}
    </div>
  );
};

export default SnippetList;
