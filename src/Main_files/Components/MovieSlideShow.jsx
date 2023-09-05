import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import styles from './Components.module.css'
import { MovieSlideShowDisplay } from './MovieSlideShowDisplay'


export const MovieSlideShow = ({ moviesData }) => {
  const [presentNUM, setPresentNUM] = useState(0);
  const handleLeft = () => {
    setPresentNUM(preNumber => (preNumber - 1) < 0 ? (moviesData.length - 1) : (preNumber - 1))
  }
  const handleRight = () => {
    setPresentNUM(preNumber => (preNumber + 1) > (moviesData.length - 1) ? 0 : (preNumber + 1))
  }
  let Movie = moviesData[presentNUM]

  return (
    <div className={styles.SlideShowBox} >
      <div className={styles.SlideShowBoxIMG}>
        <img src={`https://image.tmdb.org/t/p/original/${Movie?.backdrop_path}`} alt="" style={{ width: "100%", filter: "blur(2px)" }}
          onLoad={(e) => (e.target.style.setProperty("filter", "blur(0px)"))} />
      </div>

      <div className="leftBtn">
        <BsChevronCompactLeft className={styles.SlideBtns} onClick={handleLeft} />
      </div>
      <div className={styles.contentBox} >
        <MovieSlideShowDisplay Movie={Movie} />
      </div>
      <div className="rightBtn">
        <BsChevronCompactRight className={styles.SlideBtns} onClick={handleRight} />
      </div>
    </div>
  )
}
