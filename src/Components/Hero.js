import backgroundImage from "../tempimage/backgroundImage.jpg";
import cinder from "../cinder.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const API_KEY = "f419fd0513194bb3e5a8781bc1d4f30e";

// console.log(backgroundImage);
function Hero() {
  // return <div className="p-80 border">Hero</div>
  const [heroMovie, setHeroMovie] = useState({});
  const [allMovie, setAllMovie] = useState([]);
  const [fade, setFade] = useState(false);

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
          className={`w-full h-full bg-cover bg-center transition-opacity duration-500 ease-in-out ${
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
      <div className=" absolute xl:left-[70px] left-6  top-[250px] border-red-800 md:w-[600px]">
        {/* <div className=" mb-[700px] mt-[250px] border-red-800 w-[600px]"> */}
        <div className="ease-in-out transition-all duration-500">
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
            <p>{heroMovie.vote_average}/10 IMDb</p>
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

// import backgroundImage from "../tempimage/backgroundImage.jpg";
// import cinder from "../cinder.jpg";
// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

// // console.log(backgroundImage);
// function Hero() {
//   const API_KEY = "f419fd0513194bb3e5a8781bc1d4f30e";
//   const [heroMovie, setHeroMovie] = useState({});

//   useEffect(function () {
//     async function FetchMovie() {
//       const res = await fetch(
//         `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US`
//       );
//       const data = await res.json();
//       const finalRes = data.results[0];
//       setHeroMovie(finalRes);
//       // console.log(data.results[0]);
//       // console.log(heroMovie);
//     }
//     FetchMovie();
//   }, []);
//   // console.log(heroMovie.release_date.split().join().slice(0, 4));
//   console.log(heroMovie);
//   // console.log(heroMovie.backdrop_path);
//   return (
//     <div className="w-full overflow-hidden">

//       <div className="relative">

//         <img
//           src={`${IMAGE_BASE_URL}${heroMovie.backdrop_path}`}
//           alt="Hero-Image"
//           className="w-full h-screen object-cover object-center pt-14"
//         />
//         <div className="absolute inset-0 bg-black/10" />
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
//         <div className="absolute inset-0 bg-gradient-to-l from-transparent via-50% to-black" />
//       </div>
//       {/* Responsive text container */}
//       <div className="absolute left-4 right-4 top-32 md:left-[70px] md:top-[250px] md:right-auto md:w-[600px] max-w-full px-4 md:px-0">
//         <h1 className="mb-3 md:mb-5 text-3xl md:text-5xl leading-tight md:leading-[60px] capitalize font-bold">
//           {heroMovie.title}
//         </h1>

//         <div className="flex items-center mb-3 md:mb-5 gap-4 text-sm md:text-base">
//           <p>{heroMovie.release_date?.slice(0, 4)}</p>
//           <span>.</span>
//           <p>{heroMovie.vote_average}/10 IMDb</p>
//         </div>

//         <p className="text-slate-200 mb-5 md:mb-8 text-sm md:text-base line-clamp-4 md:line-clamp-none">
//           {heroMovie.overview}
//         </p>

//         <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-6">
//           <Link className="bg-white px-5 md:px-7 py-3 text-black rounded-md font-medium text-center text-sm md:text-base">
//             Read More
//           </Link>
//           <Link className="bg-primaryWatchTrailerPurple px-5 md:px-7 py-3 rounded-md font-medium text-center text-sm md:text-base">
//             Watch Trailer
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;
