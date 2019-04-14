import React from "react";
import {Link} from "react-router-dom";

function Nav() {
    return(
        <div>
            <h2>Google Books</h2>
            <Link to="/">Search </Link>
            <Link to="/saved"> Saved</Link>
        </div>
    );
}

export default Nav;