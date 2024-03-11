'use client';

import Link from "next/link";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";

const Movie = ({title, id, poster_path}) => {
    const router = useRouter();
    const onClick = () => {
        router.push(`/movies/${id}`);
    }
    return(
        <div className={styles.movie} onClick={onClick}>
            <img src={poster_path} alt={title} />
            <Link prefetch href={`/movies/${id}`}>{title}</Link>
        </div>
    );
}

export default Movie;