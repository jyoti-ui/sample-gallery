import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const { counter } = useSelector((state) => state);

    return (
    <div className="header">
        <div className="options">
            <Link className="option" to="/gallery">
                GALLERY
            </Link>
            <Link className="option" to="/favourites">
                FAVOURITES - {counter}
            </Link>
        </div>
    </div>
)
}

export default Header;