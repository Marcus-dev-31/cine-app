import { useNavigate } from "react-router-dom";
import styles from "./MovieCard.module.css";

export const MovieCard = ({ poster, title, vote, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pelicula/${id}`);
  };

  return (
    <article onClick={handleClick} className={styles.card}>
      <img
        className={styles.poster}
        src={
          poster
            ? `https://image.tmdb.org/t/p/w300${poster}`
            : "/sin-imagen.jpg"
        }
        alt={title}
      />
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.vote}>
          {vote ? Number(vote).toFixed(1) : "Sin puntuación"}
        </p>
      </div>
    </article>
  );
};
