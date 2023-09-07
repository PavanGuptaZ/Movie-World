import { useState, useEffect } from "react"

export const useFetch = (apiPath, pageno = 1,id) => {
    console.log(apiPath);
    const [list, setList] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&page=${pageno}&query=${id}`;
    useEffect(() => {
        console.log("done:", apiPath);
        fetchMovies();
        async function fetchMovies() {
            const responce = await fetch(url);
            const json = await responce.json();
            setList(json.results ? json.results : json);
        }
        
    }, [url, pageno, apiPath])
    return { list }
}