import { useNavigate } from "react-router-dom";

export const MovieCard = ({ poster, title, vote, id }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pelicula/${id}`)
  }

  return (
    <article onClick={handleClick}>
      <h2>{title}</h2>
      <img src={`https://image.tmdb.org/t/p/w300${poster}`} alt="movie" />
      <p>{vote}</p>
    </article>
  );
};
