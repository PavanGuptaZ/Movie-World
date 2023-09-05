import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const MovieBlock = ({ moviesData, category }) => {
    const navigator = useNavigate()
    const [cover, setCover] = useState(false);
    const handleMouseEnter = () => {
        setCover(true);
    };
    const handleMouseOut = () => {
        setCover(false);
    };
    const handleMovieId=(id)=>{
        console.log(`movie/${id}`);
        navigator(`/Movie/${id}`)
    }
    const borderStyle = {
        borderTopLeftRadius: category ? "10px" : "5px",
        borderTopRightRadius: category ? "10px" : "5px",
        borderBottomLeftRadius: category ? "0px" : "5px",
        borderBottomRightRadius: category ? "0px" : "5px",
        border: category ? "4px solid #0F2133" : "0"
    }
    let PosterUrl = moviesData.poster_path ? `https://image.tmdb.org/t/p/original${moviesData.poster_path}` : `https://source.unsplash.com/9lTUAlNB87M`
    return (
        <div>
            <div id='MovieBlock' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut} style={{
                ...borderStyle,
                width: "200px", aspectRatio: "9/16", position: "relative", flexShrink: "0",
                background: `url(${PosterUrl}) center/cover`
            }}>
                {cover && <div style={{
                    position: "absolute", top: "0", left: "0", height: "100%",
                    width: "100%", background: "rgba(0,0,0,0.5)",
                    display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                    <button onClick={() => handleMovieId(moviesData.id)} style={{
                        padding: "0.5rem 0.75rem", background: "#DD003F",
                        border: "none", outline: "none", color: "inherit",
                        fontFamily: "'Oswald', sans-serif", cursor: "pointer",
                        fontSize: "1.25rem", fontWeight: "400", borderRadius: "0.5rem"
                    }}>Details</button>
                </div>}
            </div>

            {category &&
                <div style={{
                    background: "#0F2133", padding: "10px", borderBottomRightRadius: "10px", borderBottomLeftRadius: "10px",
                    width: "200px", textAlign: "center", fontFamily: "'Oswald', sans-serif"
                }}>
                    <div style={{ fontWeight: "700", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}> {`${moviesData.title}`} </div>
                    <div style={{ fontWeight: "200" }}> {`${category.toUpperCase()}`} </div>
                    <div style={{ fontWeight: "200" }}> {`${moviesData[category]}`} </div>
                </div>}
        </div>
    )
}