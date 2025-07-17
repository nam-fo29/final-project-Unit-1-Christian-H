//This component formats the media results into a quick and easy to read card. Reusable for each media type.

const MediaCard = ({ media, onAddToList }) => (
    <div className="media-card">
        <h3>{media.title}</h3>
        {media.poster ? <img src={media.poster} alt={media.title} /> : null}
        <p>Type: {media.type}.toUpperCase()</p>
        {media.year && <p>Year: {media.year}</p>}
        {onAddToList && (
            <>
                <button onClick={() => onAddToList(media, "rewind")}>Add to Rewind</button>
                <button onClick={() => onAddToList(media, "upNext")}>Add to Up Next</button>
            </>
        )}
    </div>
);

export default MediaCard