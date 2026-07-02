import { useEffect, useState } from "react";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const API_KEY = "f419fd0513194bb3e5a8781bc1d4f30e";

export function useTMDBEndPoint(endpoint) {
  const [data, setData] = useState({});
  const [loading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // console.log(data);

  function preLoadImage(src) {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve();
      img.onerror = () => resolve();
    });
  }

  useEffect(
    function () {
      let ignore = false;

      async function FetchMainMovie(params) {
        try {
          setIsLoading(true);
          const res = await fetch(
            `https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}&page=${page}`,
          );
          const data = await res.json();

          if (!ignore) {
            const posterUrls = (data.results || []).map(
              (movie) => `${IMAGE_BASE_URL}${movie.poster_path}`,
            );

            await Promise.all(posterUrls.map(preLoadImage));
            setData(data);
          }

          setTotalPages(Math.min(data.total_pages, 500));

          // setIsLoading(false);
        } catch (error) {
          <h1 className="mt-24">{error.message}</h1>;
          setIsLoading(false);
        } finally {
          if (!ignore) {
            setIsLoading(false);
          }
        }
      }
      FetchMainMovie();
    },
    [endpoint, page],
  );

  function handlenext() {
    // if (page >= 1) setPage((p) => p + 1);
    setPage((p) => Math.min(p + 1, totalPages));
  }

  function handleprev() {
    setPage((p) => Math.max(p - 1, 1));
  }

  console.log(loading);
  return { data, loading, page, totalPages, handlenext, handleprev };
}
