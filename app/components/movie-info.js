import { API_URL } from "../(home)/page";

const getMovie = async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

const MovieInfo = async ({id}) => {
    const movie = await getMovie(id);
    return <h6>{JSON.stringify(movie)}</h6>;
}

export default MovieInfo;