
import { Link } from "react-router-dom";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { useEffect, useState } from "react";



const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const API_KEY = "f419fd0513194bb3e5a8781bc1d4f30e";
function TopRatedMovie() {
  const [topMovie, setTopMovie] = useState({});

  useEffect(function () {
    async function FetchTopMovie() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en_US`
      );
      const data = await res.json();
      setTopMovie(data);
    }
    FetchTopMovie();
  }, []);
  console.log(topMovie);

  return (
    <section>
      <div>
        <h1 className="text-3xl ml-6 font-bold lg:ml-14 mt-20 mb-10">
          Top Rated Movie
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:ml-16 ml-6 mr-6 lg:mr-16 ">
          {topMovie.results?.slice(0, 12).map((pop) => (
            <Link to={`movie/${pop.id}`}>
              <div className="relative group overflow-hidden rounded-2xl cursor-pointer">
                <img
                  src={`${IMAGE_BASE_URL}${pop.poster_path}`}
                  alt="poster"
                  className="group-hover:scale-125 object-cover h-full w-full transition-all duration-500 rounded-2xl"
                />
                <div className="absolute flex flex-col justify-end items-center inset-0">
                  <p>{pop.title || "No title avialable"}</p>
                  <p>{pop.release_date || "Na/"}</p>
                </div>
                <div className="absolute top-3 left-3 flex justify-start items-center space-x-1 bg-black/70 rounded-xl px-2 py-1 text-sm font-semibold z-30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 text-yellow-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>
                    {pop.vote_average > 1 ? pop.vote_average.toFixed(1) : "Nan"}
                  </p>
                </div>

                <div className="absolute inset-0 items-center flex justify-center opacity-0 group-hover:opacity-100 z-20">
                  <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm shadow-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-10 h-10 text-white ml-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 z-10"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopRatedMovie;
