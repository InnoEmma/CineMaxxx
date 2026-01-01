import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const API_KEY = "f419fd0513194bb3e5a8781bc1d4f30e";

// console.log(backgroundImage);
function Hero() {
  // return <div className="p-80 border">Hero</div>
  const [heroMovie, setHeroMovie] = useState({}); // ALSO CALLED FIRSTMOVIE AND SETFRISTMOVIE
  const [allMovie, setAllMovie] = useState([]);
  const [fade, setFade] = useState(false);
  // const [fade, setFade] = useState(true);

  function preLoadImage(url) {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = resolve;
    });
  }

  useEffect(function () {
    async function FetchMovie() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US`
        );
        const data = await res.json();
        const finalRes = data.results[0];
        setHeroMovie(finalRes); //setMovie, movie
        setAllMovie(data.results);
        await preLoadImage(`${IMAGE_BASE_URL}${finalRes.backdrop_path}`);
        setFade(false);
      } catch (e) {
        console.log(e);
      }
    }
    FetchMovie();
  }, []);

  useEffect(
    function () {
      if (allMovie.length === 0) return;
      const interval = setInterval(() => {
        setFade(true);
        setTimeout(async () => {
          const randomxIndex = Math.floor(Math.random() * allMovie.length);
          const nextMovie = allMovie[randomxIndex];
          // setHeroMovie(allMovie[randomxIndex]);
          await preLoadImage(`${IMAGE_BASE_URL}${nextMovie.backdrop_path}`);
          setHeroMovie(nextMovie);
          setFade(false);
        }, 500);
      }, 10000);
      return () => clearInterval(interval);
    },
    [allMovie]
  );

  return (
    <div className="w-full">
      {/* style={{clipPath:'inset(0% 0% 20% 0%)'}} */}
      <div>
        <header
          className={`w-full h-full bg-cover bg-center transition-opacity duration-700 ease-in-out ${
            fade ? "opacity-0" : "opacity-100"
          } `}
        >
          <img
            src={`${IMAGE_BASE_URL}${heroMovie.backdrop_path}`}
            alt="Hero-Image"
            className="w-full object-cover object-center pt-[64px]  pb-[15px]"
            style={{ height: "100vh" }}
          />
        </header>
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-0% to-black" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent via-50% to-black" />
      </div>
      <div className=" absolute xl:left-[70px] left-6  top-[250px] md:w-[600px]">
        {/* <div className=" mb-[700px] mt-[250px] border-red-800 w-[600px]"> */}
        <div className="ease-in-out transition-all duration-700">
          <h1 className="mb-5 text-5xl leading-[60px] capitalize font-bold">
            {/* Avatar: fire and ash */}
            {heroMovie.title || heroMovie.name}
          </h1>
          <div className="flex items-center top-96 mb-5 gap-4">
            <p>
              {heroMovie.first_air_date?.slice(0, 4) ||
                heroMovie.release_date?.slice(0, 4)}
            </p>
            <>.</>
            <p>{heroMovie.vote_average?.toFixed(1)}/10 IMDb</p>
          </div>
          <p className="text-slate-200 mb-8">{heroMovie.overview}</p>
        </div>
        <div className="flex items-center gap-6 ">
          <Link
            to={`movie/${heroMovie.id}`}
            className="bg-white px-7 py-3 text-black rounded-md font-medium"
          >
            Read More
          </Link>
          <Link className="bg-primaryWatchTrailerPurple px-7 py-3 rounded-md font-medium">
            Watch Trailer
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
