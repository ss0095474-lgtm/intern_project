import { useState } from "react";

function SearchBar({onSearch}) {
    const [query,setQuery] = useState("");

    const handleChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <div className="p-4 flex justify-center">
           <input
           type="text"
           placeholder="Search Products..."
           value={query}
           onChange={handleChange}
           className="w-1/2 p-2 border rounded-lg shadow"
           />
        </div>
    );
}

export default SearchBar;