import { readDir } from "@tauri-apps/api/fs"
import { useEffect } from "react"
import {desktopDir} from '@tauri-apps/api/path';
import { useSnippetStore } from "../store/SnippetStore";

const SnippetList = () => {
  const addSnippetName = useSnippetStore(state => state.addSnippetName)
  const snippestNames = useSnippetStore(state => state.snippestNames)

  useEffect(() => {
    const loadFiles = async () =>{
      const dektopDirectory = await desktopDir();
      const res = await readDir(`${dektopDirectory}/snippets`);
      const filenames = res.map((item) => {
        item.name
      })

      

    }
    loadFiles()
  },[])

  return (
    <div>SnippetList</div>
  )
}

export default SnippetList