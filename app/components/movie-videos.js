import { API_URL } from "../(home)/page";
import styles from "../styles/movie-vidoes.module.css";

const getVideos = async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

const MovieVideos = async ({id}) => {
    const videos = await getVideos(id);
    return(
        <div className={styles.container}>
            { videos.map(video => 
                <iframe 
                    title={video.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    key={video.id}
                    src={`https://youtube.com/embed/${video.key}`}
                />
            )}
        </div>
    );
}

export default MovieVideos;