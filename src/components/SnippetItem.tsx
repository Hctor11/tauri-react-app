interface Props {
  SnippetName: string;
}

import { useSnippetStore } from "../store/SnippetStore";

const SnippetItem = ({ SnippetName }: Props) => {
  const setSelectedSnippet = useSnippetStore(state => state.setSelectedSnippet)
  const selectedSnippet = useSnippetStore(state => state.selectedSnippet)

  return (
    <div className={`text-sm p-1 mt-1 hover:bg-slate-200 hover:cursor-pointer rounded-md ${
      selectedSnippet === SnippetName ? 
      "bg-slate-300 " : ""
    }`}
    onClick={() => {
      setSelectedSnippet(SnippetName)
    }}>
      <p>{SnippetName}</p>
    </div>
  )
}

export default SnippetItem