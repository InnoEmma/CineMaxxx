import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// console.log(trend.results.slice(0,12));

function TrendingMovie() {
  const [trending, setTrending] = useState({});
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
  const API_KEY = "f419fd0513194bb3e5a8781bc1d4f30e";

  useEffect(function () {
    async function FetchTrendingMovie() {
      const res = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US`
      );
      const data = await res.json();
      setTrending(data);
      //   console.log(data.results?.slice(0, 12));
    }
    FetchTrendingMovie();
  }, []);

//   console.log(trending.results?.slice(0, 12).map((trend, index) => trend?.id));
  return (
    <section>
      <div className="xl:px-[70px] px-6 ">
        <h1 className="text-3xl font-bold mb-10 mt-16 ">Trending Movies</h1>

        <div className="w-full wrapper grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 sm:grid-cols-3 gap-4">
          {trending.results?.slice(0, 12).map((trend, index) => (
            <Link to={`movie/${trend.id}`} key={index}>
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl cursor-pointer"
              >
                <img
                  src={`${IMAGE_BASE_URL}${trend.poster_path}`}
                  alt="Trending"
                  // 2. Added transition, duration, and group-hover:scale
                  // Added 'h-full object-cover' to ensure it fills the space smoothly
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-125"
                />

                <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                  {/* The Circle Background with blur effect */}
                  <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm shadow-lg flex items-center justify-center">
                    {/* The Heroicons Solid Play SVG */}
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

                <div className="absolute inset-0 flex-col flex items-start pl-3 justify-end">
                  <p className="text-white font-bold">{trend.title}</p>
                  <p className="text-gray-300 text-sm mb-4">
                    {trend.release_date?.slice(0, 4)}
                  </p>
                </div>
                <div className="absolute  flex  left-2 backdrop-blur-sm  top-2 gap-1 items-center z-30 bg-black/60 px-2 py-1 rounded-2xl">
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
                  <p className="text-sm">
                    {Number(trend.vote_average).toFixed(1)}
                  </p>
                </div>

                {/* 3. Updated overlay to use inset-0 (cleaner than top-0 left-0) and group-hover */}
                <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-end opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// console.log(tempTrend.results.map((lin) => lin.id));
export default TrendingMovie;
