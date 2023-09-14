import React, { useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai'
import styles from './Components.module.css';
import { useNavigate } from 'react-router-dom';

export const MovieSlideShowDisplay = ({ Movie }) => {
    const navigator = useNavigate()

    useEffect(()=>{
        document.getElementById("Posterimg").style.setProperty("filter", "blur(0px)");
    },[Movie])
    let style01 = {
        fontSize: "2rem",
        fontWeight: "700"
    }
    let style02 = {
        fontSize: "1rem",
        fontWeight: "500"
    }
    let style03 = {
        fontSize: "1.5rem",
        fontWeight: "500",
        display: "flex",
        alignItems: "center"
    }
    const handleMovieId=(id)=>{
        console.log(`movie/${id}`);
        navigator(`/Movie/${id}`)
    }
    return (
        <div onClick={() => handleMovieId(Movie.id)} style={{ position: "relative", display: "flex", alignItems: "center", padding: "30px" , zIndex:"2",cursor:"pointer" }}>
            <div className={styles.contentText}>
                <div style={style01}>{Movie?.title} <span style={style02}>{Movie?.release_date.substring(0, 4)}</span> </div>
                <div style={style03}><AiFillStar style={{ color: "#F5B50A", marginRight: "10px" }} />{Movie?.vote_average}/10</div>
                <div>{Movie?.overview.length < 150 ? Movie?.overview : `${Movie?.overview.substring(0, 150)}...`}</div>
                <div>{Movie?.genre_ids}</div>
            </div>
            <div style={{ width: "200px", float: "right", boxShadow: "8px -8px 10px rgba(0,0,0,0.5)" }}>
                <img id='Posterimg' src={`https://image.tmdb.org/t/p/original/${Movie?.poster_path}`} alt="" style={{ width: "100%", filter: "blur(2px)" }}
                    onLoad={(e) => (e.target.style.setProperty("filter", "blur(0px)"))} />
            </div>
        </div>
    )
}
