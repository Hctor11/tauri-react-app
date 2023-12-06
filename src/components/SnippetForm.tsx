import { writeTextFile } from "@tauri-apps/api/fs";
import { desktopDir } from "@tauri-apps/api/path";
import { useState } from "react";
import { useSnippetStore } from "../store/SnippetStore";

const SnippetForm = () => {

  const [snippetName, setSnippetName] = useState("");
  const addSnippetName = useSnippetStore((state) => state.addSnippetName);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const desktopPath = await desktopDir();
        console.log(desktopPath);
        await writeTextFile(`${desktopPath}snippets/${snippetName}.txt`, "");
        setSnippetName("");
        addSnippetName(snippetName);
      }}
    >
      <input
        type="text"
        placeholder="Type snippet name.."
        className="p-1 border-2 border-slate-300 rounded-md text-xs w-full"
        onChange={(e) => setSnippetName(e.target.value)}
        value={snippetName}
      />
    </form>
  );
};

export default SnippetForm;
