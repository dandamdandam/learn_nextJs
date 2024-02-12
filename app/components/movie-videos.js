import { API_URL } from "../(home)/page";

const getVideos = async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

const MovieVideos = async ({id}) => {
    const videos = await getVideos(id);
    return <h6>{JSON.stringify(videos)}</h6>;
}

export default MovieVideos;