import React,
 { useEffect, useState } 
 from 'react';
import { MovieBlock } from '../Components';
import styles from '../Components/Components.module.css';
import { useFetch } from '../Hooks/useFetch';
import { useLocation } from 'react-router-dom';

export const MovieWorldCategory = ({ category, apiPath }) => {
  const { pathname } = useLocation();
  const [pageNumber, setPageNumber] = useState(1);
  const { list: moviesData } = useFetch(apiPath, pageNumber);
  window.scrollTo(0, 0);
  useEffect(() => {
    setPageNumber(1);
  }, [pathname])
  const HandleNextPage = () => {
    setPageNumber(preValue => preValue + 1);
  }
  const HandlePrevoiusPage = () => {
    setPageNumber(preValue => (preValue - 1) < 1 ? 1 : (preValue - 1));
  }

  const styleBtn = {
    backgroundColor: "#DD003F", outline: "none", border: "none", padding: "0.5rem 1rem", margin: "0 10px",
    color: "#fff", fontSize: "1.25rem", borderRadius: "10px", cursor: "pointer"
  }
  return (
    <div className={styles.containar}>
      <div id={category} className={styles.MovieCollege}>
        {moviesData.map(element => {
          return <MovieBlock key={element.id} moviesData={element} category={category} />
        })}

      </div>
      <div style={{ display: "flex", justifyContent: "center", margin: "10px 0", alignItems: "center" ,fontFamily: "'Oswald', sans-serif" }}>
        <button onClick={HandlePrevoiusPage} style={styleBtn}>Previous Page</button>
        <div>Now Page no : {pageNumber}</div>
        <button onClick={HandleNextPage} style={styleBtn}>Next Page</button>
      </div>
    </div>
  )
}
