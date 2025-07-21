import MediaList from "../components/media-organization/MediaList";
import './pages-css/Rewind.css';

const Rewind = ({ lists, onDeleteFromList }) => {

    const mediaSortType = ["Movies", "TV Shows", "Video Games", "Books"];

    return (
        <div className="rewind">
            <h1 className="rewind-title">REWIND</h1>
            <div className="rewind-list-items">
                {mediaSortType.map((type) => {
                    const items = lists.rewind[type];
                    return (
                        items && items.length > 0 && (
                            <div className="media-type-column" key={type}>
                                <MediaList 
                                key={type} 
                                list={items} 
                                title={type.toUpperCase()} 
                                showDelete={true} 
                                onDelete={(media) => onDeleteFromList(media, "rewind")} />
                            </div>
                        )
                    );
                })}
            </div>
        </div>
    );
};

export default Rewind;