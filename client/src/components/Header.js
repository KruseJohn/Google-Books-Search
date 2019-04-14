import React from "react";
import heroImage from "../images/book.jpg";
import {Link} from "react-router-dom";

const headerStyle = {
  "backgroundImage": `url(${heroImage})`,
  "backgroundSize": "cover",
  position: "relative"
}

function Header() {
    return (
        <header style={headerStyle}>
        <nav>
            <Link to="/">Search </Link>
            <Link to="/saved"> Saved</Link>
        </nav>
            <h1>Google Books</h1>
            <p>Search and Save Books of Interest</p>
        </header>
    );
}

export default Header;