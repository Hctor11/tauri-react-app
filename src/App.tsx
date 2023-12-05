import SnippetEditor from "./components/SnippetEditor"
import SnippetList from "./components/SnippetList"
import SnippetForm from "./components/SnippetForm"
import SnippetItem from "./components/SnippetItem"

const App = () => {
  return (
    <div>
      <SnippetEditor/>
      <SnippetList/>
      <SnippetForm/>
      <SnippetItem/>
    </div>
  ) 
}
  
export default App