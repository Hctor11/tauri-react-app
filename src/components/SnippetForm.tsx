import { writeTextFile } from "@tauri-apps/api/fs";
import { desktopDir } from "@tauri-apps/api/path";

const SnippetForm = () => {
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const desktopPath = await desktopDir();
        writeTextFile(desktopPath);
      }}
    >
      <input
        type="text"
        placeholder="Type snippet name.."
        className="p-1 border-2 border-slate-300 rounded-md text-xs w-full"
      />
    </form>
  );
};

export default SnippetForm;
