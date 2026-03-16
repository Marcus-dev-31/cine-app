import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./MovieDetail.module.css";

export const MovieDetail = () => {
  const [date, setDate] = useState(null);
  const [charge, setCharge] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=es-ES&page=1`,
    )
      .then((res) => res.json())
      .then((res) => {
        setDate(res);
        setCharge(false);
      })
      .catch((error) => {
        console.error("Error Completo", error);
        setError("No se pudieron cargar las peliculas");
        setCharge(false);
      });
  }, [id]);

  if (charge) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <img
          src={`https://image.tmdb.org/t/p/w300${date.poster_path}`}
          alt={date.title}
          className={styles.poster}
        />
        <div className={styles.info}>
          <h3 className={styles.title}>{date.title}</h3>
          <p className={styles.genres}>{date.genres.map((id) => id.name).join(", ")}</p>
          <p className={styles.meta}>⭐{Number(date.vote_average).toFixed(1)}</p>
          <p className={styles.meta}>{date.release_date}</p>
          <p className={styles.overview}>{date.overview}</p>
        </div>
      </div>
    </div>
  );
};
