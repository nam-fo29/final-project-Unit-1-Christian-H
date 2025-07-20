import { useState } from "react";
import SearchBar from "../components/media-search/SearchBar";
import MediaList from "../components/media-organization/MediaList";

console.log("OMDB KEY:", import.meta.env.VITE_OMDB_API_KEY);
const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const RAWG_API_KEY = import.meta.env.VITE_RAWG_API_KEY;

const Home = ({ onAddToList }) => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null)

    const fetchMedia = async (query, type) => {
        let mediaData = [];
        setError(null);
        try {
            if (type === "Movies" || type === "TV Shows") {
                const response = await fetch(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${query}&type=${type === "TV Shows" ? "series" : "movie"}`);
                const json = await response.json();
                if (json.Response === "False") {
                    throw new Error(json.Error || "No results found");
                }
                
                    mediaData = json.Search.map(item => ({
                        title: item.Title,
                        type,
                        year: item.Year,
                        poster: item.Poster
                    }));
                
            } else if (type === "Video Games") {
                const response = await fetch(`https://api.rawg.io/api/games?key=${RAWG_API_KEY}&search=${query}`);
                const json = await response.json();
                
                if (json.Response === "False") {
                    throw new Error(json.Error || "No results found")
                }
                mediaData = json.results.map(game => ({
                    title: game.name,
                    type,
                    year: game.released,
                    poster: game.background_image
                }));
            } else if (type === "Books") {
                const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
                const json = await response.json();
                if (json.items) {
                    mediaData = json.items.map(book => ({
                        title: book.volumeInfo.title,
                        year: book.volumeInfo.publishedDate,
                        type,
                        poster: book.volumeInfo.imageLinks?.thumbnail
                    }));
                }
            }
            setResults(mediaData);
        } catch (error) {
                console.error("Fetch not working", error)
                setError("Unable to complete search. Title may not be available. Please try again.")
                setResults([]);
        }
    };

    return (
        <div>
            <h1 className="start-search">Search To Start Your List</h1>
            <SearchBar onSearch={fetchMedia} />
            {error && <p className="error-message">{error}</p>}
            <MediaList list={results} title="Search Results" onAddToList={onAddToList} />
        </div>
    );
};

export default Home;