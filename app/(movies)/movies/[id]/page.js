import { API_URL } from "../../../(home)/page";

const getMovie = async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

const MovieDetail = async ({ params: { id } }) => {
    const movie = await getMovie(id);
    return( 
        <h1>{movie.title}</h1>
    );
};

export default MovieDetail;