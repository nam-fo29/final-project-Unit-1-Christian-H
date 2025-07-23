import vhsSpinner from "../../images/vhs-img.webp"
import './media-org-css/Loading.css'

const Loading = () => {
    return (
        <div className="loading-message">
            <img src={vhsSpinner} alt="Loading.." className="spinner" />
        </div>
    );
};

export default Loading;