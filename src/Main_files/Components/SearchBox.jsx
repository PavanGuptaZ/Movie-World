import React, { useState } from 'react';
import styles from './Components.module.css'
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

export const SearchBox = ({Adjust}) => {
    const [search, setSearch] = useState("");
    const navigator = useNavigate();
    const handleSearch = (e) => {
        e.preventDefault();
        navigator(`Search/${search}`);
        setSearch("");
    }
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    return (
        <form onSubmit={handleSearch} style={{ display: "flex", alignItems: "center" }}>
            <input id='search' className={styles.searchInput} type="text" placeholder='Title Here' value={search} onChange={handleChange} />
            <button onClick={handleSearch} className={styles.searchBtn}><FaSearch /></button>
        </form>
    )
}
