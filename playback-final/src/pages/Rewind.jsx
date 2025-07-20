import MediaList from "../components/media-organization/MediaList";

const Rewind = ({ lists }) => {
    const mediaSortType = ["Movies", "TV Shows", "Video Games", "Books"];

    return (
        <div className="rewind">
            <h1 className="rewind-title">REWIND</h1>
            <div className="rewind-list-items">
                {mediaSortType.map((type) => {
                    const items = lists.rewind[type];
                    return (
                        items && items.length > 0 && (
                            <MediaList key={type} list={items} title={type.toUpperCase()} />
                        )
                    );
                })}
            </div>
        </div>
    );
};

export default Rewind;