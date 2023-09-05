import React from 'react';
import { MovieSlideShow } from '../Components';
import styles from '../Components/Components.module.css';
import { MovieKit } from '../Components'

export const MovieWorldHome = ({ moviesDataA, moviesDataB, moviesDataC }) => {
  function getrandom(list) {
    return [list[Math.floor(Math.random() * (list.length - 1))], list[Math.floor(Math.random() * (list.length - 1))]]
  }
  let sortMovies
  (function () {
    let array01 = getrandom(moviesDataA);
    let array02 = getrandom(moviesDataB);
    let array03 = getrandom(moviesDataC);
    sortMovies = array01.concat(array02, array03);
  })()
  return (
    <div className={styles.containar}>
      <MovieSlideShow moviesData={sortMovies}/>
      <MovieKit moviesData={moviesDataA} title="Popular" link="popular" apiPath={"movie/popular"} />
      <MovieKit moviesData={moviesDataB} title="Top Rating" link="TopRating" apiPath={"movie/popular"} />
      <MovieKit moviesData={moviesDataC} title="Upcoming" link="Upcoming" apiPath={"movie/popular"} />

    </div>
  )
}
