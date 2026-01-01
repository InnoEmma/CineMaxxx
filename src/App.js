import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import TvShowDetails from "./pages/TvShowDetails";
import TvShows from "./pages/TvShows";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./pages/Layout";
import MovieDetails from "./pages/MovieDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="movies/popular" element={<Movie />} />
          <Route path="movie/:id" element={<MovieDetails />} />
          <Route path="tv/:id" element={<TvShowDetails />} />
          <Route path="tv-shows/popular" element={<TvShows />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
