import { useState, useEffect } from "react"

export const useFetch = (apiPath, pageno = 1, id) => {
    // console.log(apiPath);
    const [list, setList] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&page=${pageno}&query=${id}`;
    useEffect(() => {
        console.log("done:", apiPath);
        async function fetchMovies() {
            try {
                const responce = await fetch(url);
                if (!responce.ok) throw new Error("something went wrong with fetching movies")
                
                const json = await responce.json();
                if (json.Responce === false) throw new Error("Movies not found")
                
                setList(json.results ? json.results : json);

            } catch (error) {
                console.error(error.message);
            } finally {

            }
        }
        fetchMovies();
    }, [url, pageno, apiPath])
    return { list }
}