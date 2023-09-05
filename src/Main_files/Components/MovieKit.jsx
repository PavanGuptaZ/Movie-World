import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MovieBlock } from '.';
import styles from './Components.module.css';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
// import { HandleArrows } from '../JavaScript/Movie'
// import { useFetch } from '../Hooks/useFetch';



export const MovieKit = ({ moviesData, title, link, apiPath }) => {

    let Navigator = useNavigate();
    let Length = (moviesData.length * 200) + ((moviesData.length - 1) * 20);
    useEffect(() => {
        window.onresize = () => {
            HandleArrows("", link, Length)
        }
    })

    const HandleArrows = (key, id, TotalLength) => {
        let element = document.getElementById(id);
        let ScrollableWidth, style;
        // console.log(ScrollableWidth);
        try {
            ScrollableWidth = TotalLength - element.clientWidth;
            style = (window.getComputedStyle(element).transform.split(","))[4];
        } catch (error) {
            console.log("Fail to get value", error);
            return;
        }
        let newValue;
        switch (key) {
            case "left":
                newValue = (parseInt(style) + 200) > 0 ? 0 : (parseInt(style) + 200);
                break;
            case "right":
                newValue = (parseInt(style) - 200) < -ScrollableWidth ? -ScrollableWidth : (parseInt(style) - 200);
                break;
            default:
                newValue = 0;
                break;
        }
        element.style.setProperty('transform', `translateX(${newValue}px)`);
    }
    const handleScroll = (event) => {
        if (event.deltaY < 0) {
            HandleArrows("left", link, Length)

        } else if (event.deltaY > 0) {
            HandleArrows("right", link, Length)
        }
    }
    window.removeEventListener("wheel", preventWindowScroll);
    function preventWindowScroll(event) {
        event.preventDefault();
    }
    window.removeEventListener("wheel", preventWindowScroll);
    const handleMouseEnter = () => {
        window.addEventListener("wheel", preventWindowScroll, { passive: false });
        console.log("added");
    }
    const handleMouseLeave = () => {
        window.removeEventListener("wheel", preventWindowScroll);
        console.log("removed");
    }
    return (
        <div className="kit" style={{ backgroundColor: "#0F2133", padding: "20px", margin: "20px 0", borderRadius: "5px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }} >
                <div style={{ fontSize: "1.25rem", fontWeight: "700" }}>{title}</div>
                <div style={{ display: "flex" }}>

                    <div>
                        <BsArrowLeft className={styles.ArrowIcons} onClick={() => HandleArrows("left", link, Length)} />
                        <BsArrowRight className={styles.ArrowIcons} onClick={() => HandleArrows("right", link, Length)} values={link} />
                    </div>
                    <div className={styles.ViewMore} onClick={() => Navigator(link)}>View More</div>
                </div>
            </div>
            <div className='ScrollBox'
                onWheel={handleScroll}
                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                style={{ overflowX: "hidden" }}>
                <div id={link} style={{
                    display: "flex", marginTop: "20px", gap: "20px", transform: `translateX(0px)`
                }}>
                    {moviesData.map(element => <MovieBlock key={element.id} moviesData={element} />)}
                </div>
            </div>
        </div>
    )
}
