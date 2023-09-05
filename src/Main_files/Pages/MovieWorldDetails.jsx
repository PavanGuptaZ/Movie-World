import React, { useState } from 'react';
// import Movie from '../Data/movie.json';
import styles from '../Components/Components.module.css';
import { AiOutlineHeart, AiFillHeart, AiFillStar } from 'react-icons/ai';
import { BsFillShareFill } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { useFetch } from '../Hooks/useFetch';

export const MovieWorldDetails = () => {
  const [liked, setLike] = useState(false);
  const params = useParams()
  window.scrollTo(0, 0);
  const { list: Movie } = useFetch(`movie/${params.id}`)
  let bgimgSrc = Movie.backdrop_path ? `https://image.tmdb.org/t/p/original/${Movie.backdrop_path}` : `https://source.unsplash.com/9lTUAlNB87M`;
  let PosterUrl = Movie.poster_path ? `https://image.tmdb.org/t/p/original${Movie.poster_path}` : `https://source.unsplash.com/9lTUAlNB87M`
  let runtime = Movie.runtime ? `${Math.floor(Movie.runtime / 60)}h ${Math.floor(Movie.runtime % 60)}m` : "no information"

  return (
    <div className={styles.containar} style={{ position: "relative" }} >

      <div style={{ width: "100%", minHeight: "100vh", position: "relative", margin: "10px 0" }}>
        <div className="img" style={{
          background: `url(${bgimgSrc}) center/cover`,
          width: "100%", height: "100vh", position: "absolute", overflow: "hidden"
        }}>
          <div style={{ position: "absolute", top: "0", left: "0", height: "100%", width: "100%", background: "rgba(0,0,0,0.8)" }}></div>
        </div>


        <div className={styles.MovieDetailsBox} style={{
          position: "relative", left: "50%", transform: "translatex(-50%)", top: "20px",
          fontFamily: "'Oswald', sans-serif",
        }}>
          <div >
            <img src={PosterUrl} alt="" style={{ width: "300px" }} />
          </div>

          <div style={{ width: "400px", display: "flex", flexDirection: "column", justifyContent: "center", margin: "0 20px" }}>
            <div style={{ fontSize: "3rem" }}>
              <span style={{ marginRight: "10px" }}>{Movie.title}</span>
              <span style={{ fontSize: "2rem" }}>{Movie.release_date}</span><br />
              {/* <span style={{ fontSize: "2rem" }}>{Movie.release_date.substring(0, 4)}</span><br /> */}
              <span style={{ fontSize: "1rem" }}>{(Movie.tagline)}</span> </div>

            <div style={{ display: "flex", flexDirection: "column", margin: "10px 0" }}>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <div style={{ display: 'flex', alignItems: "center",userSelect:"none",width:"160px"}}>
                  <div className={styles.DetailsBtn01} >
                    {liked ? <AiFillHeart onClick={() => setLike(false)} /> : <AiOutlineHeart onClick={() => setLike(true)} />}
                  </div>
                  {liked ? "Favorite Added" : "add to Favorite"}
                </div>
                <div style={{ display: 'flex', alignItems: "center" }}> <div className={styles.DetailsBtn01}>
                  <BsFillShareFill />
                </div> share </div>
              </div>
            </div>

            <div style={{
              borderTop: "1px solid Gray", borderBottom: "1px solid Gray", margin: "10px 0",
              textAlign: "center", fontSize: "1.25rem"
            }}><AiFillStar style={{ color: "gold" }} /> {Movie.vote_average}/10 <br /> {Movie.vote_count} Reviews
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", margin: "10px 0" }}>
              {Movie.genres && Movie.genres.map(element => {
                return (<span className={styles.genresBtn} key={element.id}>{element.name}</span>)
              })}
            </div>

            <div style={{ fontWeight: "400" }}>
              <div style={{ fontSize: "1.5rem" }}>overview</div>
              <div>{Movie.overview}</div>
            </div>

            <div>Released on {Movie.release_date}</div>
            <div>RunTime - {runtime}</div>
            <div>Budget - ${Movie.budget}</div>
            <div>Budget - ${Movie.revenue}</div>

            <div style={{ marginTop: "20px" }}>
              {Movie.imdb_id && <a href={`https://www.imdb.com/title/${Movie.imdb_id}/`} target='_blank' rel='noreferrer' style={{
                backgroundColor: "#F5C518", color: "black", padding: "0.5rem 1rem", borderRadius: "5px"
              }}> IMDB LINK</a>}
            </div>

            <div style={{ margin: "10px 0" }}>
              <div style={{ fontSize: "1.5rem" }}>Production companies</div>
              <div style={{ display: "flex", flexWrap: "wrap", margin: "10px 0" }}>
                {Movie.production_companies && Movie.production_companies.map(element => {
                  return (<span className={styles.production_companie} key={element.id}>{element.name}</span>)
                })}
              </div>
            </div>


          </div>
        </div>

      </div>
    </div>
  )
}
