import MediaCard from "./MediaCard";

//This component creates the section for the search results. It passes necessary data to MediaCard to be displayed neatly and the actions to add to the Rewind and Up Next list.

const MediaList = ({ list, title, onAddToList }) => {
    if (!list || list.length === 0) {
        return null; //Catches a search that yields no results.
    }
    return (
        <div className="media-list">
            <h2>{title}</h2>
            <div className="media-items">
                {list.map((media, i) => (
                    <MediaCard key={i} media={media} onAddToList={onAddToList} />
                ))}
            </div>
        </div>
    );
};

export default MediaList;