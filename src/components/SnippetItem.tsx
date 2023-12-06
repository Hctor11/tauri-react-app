import { useSnippetStore } from "../store/SnippetStore";
import { readTextFile } from "@tauri-apps/api/fs";
import { desktopDir, join } from "@tauri-apps/api/path";

interface Props {
  SnippetName: string;
}

const SnippetItem = ({ SnippetName }: Props) => {
  const setSelectedSnippet = useSnippetStore(
    (state) => state.setSelectedSnippet
  );
  const selectedSnippet = useSnippetStore((state) => state.selectedSnippet);

  return (
    <div
      className={`text-sm p-1 mt-1 hover:bg-slate-200 hover:cursor-pointer rounded-md ${
        selectedSnippet?.name === SnippetName ? "bg-slate-300 " : ""
      }`}
      onClick={async () => {
        const dektopDirectory = await desktopDir();
        
        const filePath = await join(
          dektopDirectory,
          "snippets",
          `${SnippetName}.txt`
        );

        const snippet = await readTextFile(filePath);

        setSelectedSnippet({ name: SnippetName, code: snippet });
      }}
    >
      <p>{SnippetName}</p>
    </div>
  );
};

export default SnippetItem;
