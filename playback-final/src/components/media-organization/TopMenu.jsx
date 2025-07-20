import { Link } from "react-router";
import "./media-org-css/TopMenu.css";

const TopMenu = () => {
    return (
        <header className="top-menu">
            <h1 className="website-name">Play<span className="fifth-letter">B</span>ack</h1>
            <nav>
                <Link to='/' className="home-nav">Home</Link>
                <Link to='/Rewind'>Rewind</Link>
                <Link to='/Up-Next'>Up Next</Link>
                <Link to='/About'>About</Link>
            </nav>
        </header>
    );
};

export default TopMenu;