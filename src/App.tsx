import SnippetEditor from "./components/SnippetEditor";
import SnippetList from "./components/SnippetList";
import SnippetForm from "./components/SnippetForm";

const App = () => {
  return (
    <div className="bg-slate-50 text-gray-800 min-h-screen grid grid-cols-12">
      <div className="bg-slate-100 col-span-3 border-r border-slate-300 p-2">
        <SnippetForm />
        <SnippetList />
      </div>
      <div className="col-span-9">
        <SnippetEditor />
      </div>
    </div>
  );
};

export default App;
