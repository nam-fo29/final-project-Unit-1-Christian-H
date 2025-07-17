const MediaButton = ({type, selectedType, onClick}) => {
    const isSelected = type === selectedType;
    return (
        <button type="button" onClick={onClick} className={isSelected ? "selected" : ""}>{type}</button>
    )
};

export default MediaButton