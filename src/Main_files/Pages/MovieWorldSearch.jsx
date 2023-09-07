import React from 'react';
import { useParams } from 'react-router-dom';
import styles from '../Components/Components.module.css';
import { useFetch } from '../Hooks/useFetch';
import { MovieBlock } from '../Components';


export const MovieWorldSearch = ({category}) => {
  const {id} = useParams();
  const { list: moviesData } = useFetch("search/movie", 1,id);
  return (
    <div className={styles.containar}>
      <div style={{textAlign:"center",margin:"10px 0"}}>Search Results of <b>{id}</b></div>
    <div id={category} className={styles.MovieCollege}>
      {moviesData.map(element => {
        return <MovieBlock key={element.id} moviesData={element} category={category} />
      })}

    </div>
  </div>
  )
}
