import { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <input
        className="bg-transparent border border-slate-500 py-2 px-8 rounded-md transition duration-300 focus:outline-none focus:ring focus:ring-primaryPurple"
        placeholder="Search..."
        // value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
