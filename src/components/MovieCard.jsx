export const MovieCard = ({ poster, title, vote }) => {
  return (
    <>
    <h2>{title}</h2>
    <img src= {`https://image.tmdb.org/t/p/w300${poster}`} alt="movie" />
    <p>{vote}</p>
    </>
  )
}
