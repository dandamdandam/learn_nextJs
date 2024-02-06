'use client'

import { useEffect, useState } from "react";

const Main = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
        const json = await response.json();
        setMovies(json);
    };
    useEffect(() => {
        getMovies();
        setIsLoading(false);
    }, []);

    return(
        <div>
            {isLoading ? "Loading...": JSON.stringify(movies)}
        </div>
    );
}

export default Main;