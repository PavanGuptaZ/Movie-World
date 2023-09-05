import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MovieWorldNavBar, MovieWorldFooter } from './Components';
import { MovieWorldHome, MovieWorldCategory, MovieWorldSearch, MovieWorldDetails, PageNotFound } from './Pages';
import { useFetch } from './Hooks/useFetch';

export const MovieWorld = () => {
    const { list: moviesData01 } = useFetch("movie/popular", 1, "123");
    const { list: moviesData02 } = useFetch("movie/top_rated", 1, "123");
    const { list: moviesData03 } = useFetch("movie/upcoming", 1, "123");

    return (
        <div style={{ width: "100%", minHeight: "100vh", backgroundColor: "#020D18", color: "#fff" }}>
            <MovieWorldNavBar />
            <main style={{ minHeight: "65vh" }}>
                <Routes>
                    <Route path="/" element={<MovieWorldHome moviesDataA={moviesData01} moviesDataB={moviesData02} moviesDataC={moviesData03} />} />
                    <Route path="Popular" element={<MovieWorldCategory category={"popularity"} apiPath={"movie/popular"} />} />
                    <Route path="TopRating" element={<MovieWorldCategory category={"vote_average"} apiPath={"movie/top_rated"} />} />
                    <Route path="Upcoming" element={<MovieWorldCategory category={"release_date"} apiPath={"movie/upcoming"} />} />
                    <Route path="Movie/:id" element={<MovieWorldDetails />} />
                    <Route path="Search" element={<MovieWorldSearch />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </main>
            <MovieWorldFooter />
        </div>
    )
}
