import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
// import Data from "../data/Data.json";
import "../styles/searchbar.css";

const SearchBar = ({ onSearch }) => { 
    const [searchTerm, setSearchTerm] = useState("");

    const handleTyping = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        onSearch(term);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search"
                className="search-bar__input"
                onChange={handleTyping}
                value={searchTerm}
            />
            <button type="submit" className="search-bar__button">
                <IoIosSearch />
            </button>
        </div>
    );
}

export default SearchBar;
