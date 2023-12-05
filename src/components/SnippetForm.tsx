const SnippetForm = () => {
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      alert('saved form')
    }}>
      <input type="text" 
        placeholder="Type snippet name.."
        className="p-1 border-2 border-slate-300 rounded-md text-xs w-full" />
    </form>
  );
};

export default SnippetForm;
