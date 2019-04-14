import React from "react";

function SearchForm(props) {
    return(
        <div id="searchContainer">
            <h2>Book Search</h2>
            <form id="bookSearch">
                
                <input type="text" name="bookInput" id="bookInput" form="bookSearch" onChange={(e) => props.handleChange(e)} placeholder="Enter a book title..." required />
                <br></br>
                <button type="submit" onClick={(e) => props.handleSearchClick(e)}>Search</button>
            </form>
        </div>
    );
}

export default SearchForm;