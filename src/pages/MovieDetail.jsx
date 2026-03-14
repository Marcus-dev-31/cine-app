import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const MovieDetail = () => {

  const [date, setDate] = useState(null);
  const [charge, setCharge] = useState(true);
  const [error, setError] = useState(null);

  const {id} = useParams();

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
    <>
      <h2>MovieDetail</h2>
      <h3>{date.title}</h3>
      <img src={`https://image.tmdb.org/t/p/w300${date.poster_path}`} alt={date.title} />
      <p>{date.overview}</p>
      
      <p>Puntuacion: {date.vote_average}</p>
      <p>fecha de estreno: {date.release_date}</p>
      <p>genero: {date.genres.map((id) => id.name).join(", ")}</p>
    </>
  );
};
