import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
        <NavLink to="/">Pelis-Route</NavLink>
        <NavLink to="/buscar">Buscar</NavLink>
    </nav>
  )
}
