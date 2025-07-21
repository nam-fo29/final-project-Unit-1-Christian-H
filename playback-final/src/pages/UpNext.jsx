import MediaList from "../components/media-organization/MediaList";

const UpNext = ({ lists, onAddToList, onDeleteFromList }) => {
    const mediaSortType = ["Movies", "TV Shows", "Video Games", "Books"];

    const handleAddAndRemove = (media) => {
        onAddToList(media, "rewind");
        onDeleteFromList(media, "upNext");
    };

    return (
        <div className="up-next">
            <h1 className="up-next-title">UP NEXT</h1>
            <div className="up-next-list-items">
            {mediaSortType.map((type) => {
                const items = lists.upNext[type];
                return (
                    items && items.length > 0 && (
                        <div className="media-type-column" key={type}>
                        <MediaList 
                        key={type} 
                        list={items} 
                        title={type.toUpperCase} 
                        showDelete={true} 
                        onDelete={(media) => onDeleteFromList(media, "upNext")} 
                        onAddToList={handleAddAndRemove} 
                        hideUpNextButton={true} />
                        </div>
                    )
                );
            })}
            </div>
        </div>
    )
};
export default UpNext;