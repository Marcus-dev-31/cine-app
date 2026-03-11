import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { MovieDetail } from "../pages/MovieDetail";
import { Search } from "../pages/Search";
import { NotFound } from "../pages/NotFound";
import { Layout } from "../components/Layout";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pelicula/:id" element={<MovieDetail />} />
          <Route path="/buscar" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
