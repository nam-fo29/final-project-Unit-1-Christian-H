import { useState } from "react";
import SearchBar from "../SearchBar";
import MediaList from "../MediaList";

const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const RAWG_API_KEY = import.meta.env.VITE_RAWG_API_KEY;

const Home = ({ onAddToList }) => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null)

    const fetchMedia = async (query, type) => {
        let mediaData = [];
        try {
            if (type === "movie" || type === "tv") {
                const response = await fetch(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${query}&type=${type === "tv" ? "series" : "movie"}`);
                const json = await response.json();
                if (json.Search) {
                    mediaData = json.Search.map(item => ({
                        title: item.Title,
                        year: item.Year,
                        poster: item.Poster
                    }));
                }
            } else if (type === "game") {
                const response = await fetch(`https://api.rawg.io/api/games?key=${RAWG_API_KEY}&search=${query}`);
                const json = await response.json();
                mediaData = json.results.map(game => ({
                    title: game.name,
                    year: game.released,
                    poster: game.background_image
                }));
            } else if (type === "book") {
                const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
                const json = await response.json();
                if (json.items) {
                    mediaData = json.items.map(book => ({
                        title: book.volumeInfo.title,
                        year: book.volumeInfo.publishedDate,
                        cover: book.volumeInfo.imageLinks?.thumbnail
                    }));
                }
            }
            setResults(mediaData);
        } catch {
                setError("Unable to complete search. Title may not be available. Please try again.")
                setResults([]);
        }
    };

    return (
        <div>
            <h1>PlayBack Search</h1>
            <SearchBar onSearch={fetchMedia} />
            {error && <p className="error-message">{error}</p>}
            <MediaList list={results} title="Search Results" onAddToList={onAddToList} />
        </div>
    );
};

export default Home;