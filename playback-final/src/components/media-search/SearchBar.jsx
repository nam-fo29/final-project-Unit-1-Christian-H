import { useState } from "react";
import MediaButton from "./MediaButton";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");
    const [mediaType, setMediaType] = useState("movie");

    const handleSubmit = e => {
        e.preventDefault();
        onSearch(query, mediaType);
    };
    
    const mediaTypes = ["movie", "tv", "game", "books"];

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input type="text" placeholder="Search titles here..." value={query} onChange={e => setQuery(e.target.value)} />
            <div className="media-buttons">
                {mediaTypes.map((type) => (
                    <MediaButton 
                    key={type}
                    type={type}
                    isSelected={mediaType}
                    onClick={() => setMediaType} />
                ))};
            </div>
            <button type="submit" className="submit-search">Search</button>
        </form>
    );
};

export default SearchBar;