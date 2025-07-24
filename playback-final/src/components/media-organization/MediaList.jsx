import MediaCard from "./MediaCard";
import "./media-org-css/MediaList.css";

//This component creates the section for the search results. It passes necessary data to MediaCard to be displayed neatly and the actions to add to the Rewind and Up Next list.

const MediaList = ({ list, title, onAddToList, showDelete = false, onDelete, hideUpNextButton = false }) => {
    if (!list || list.length === 0) {
        return null; //Catches a search that yields no results.
    }
    return (
        <ul className="media-list">
            <h2 className="search-results">{title}</h2>
            <li className="media-items">
                {list.map((media, i) => (
                    <MediaCard key={i} 
                    media={media} 
                    onAddToList={onAddToList} 
                    showDelete={showDelete} 
                    onDelete={onDelete} 
                    hideUpNextButton={hideUpNextButton} />
                ))}
            </li>
        </ul>
    );
};

export default MediaList;