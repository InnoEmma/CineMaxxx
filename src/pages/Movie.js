import { useEffect, useState } from "react";
import { data, Link } from "react-router-dom";
import Loader from "../Components/Loader";
import { preload } from "react-dom";
import { useTMDBEndPoint } from "../hooks/useTMDBEndPoint";
import MediaCard from "../Components/MediaCard";

// const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const API_KEY = "f419fd0513194bb3e5a8781bc1d4f30e";

function Movie() {
  const { data, loading, page, totalPages, handlenext, handleprev } =
    useTMDBEndPoint("/movie/popular");
  // console.log(loading);

  if (loading) {
    return (
      <div className=" flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }
  return (
    <section className="w-full pt-32 bg-black pl-20 pr-20 pb-10">
      <h1 className="text-4xl mb-10 font-bold text-white">Popular Movies</h1>

      <div className="flex flex-wrap gap-5 w-full">
        {data.results?.map((movie) => (
          // <Link to={`/movie/${movie.id}`} key={movie.id}>
          //   {/* Card container: relative, fixed dimensions, overflow hidden */}
          //   <div className="relative w-[181px] aspect-[2/3] group overflow-hidden rounded-2xl cursor-pointer">
          //     {/* 1. Image (base layer, z-0) */}
          //     <img
          //       src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          //       alt={movie.title}
          //       loading="lazy"
          //       decoding="async"
          //       className="w-full h-full object-cover rounded-2xl group-hover:scale-125 transition-transform duration-500"
          //     />

          //     {/* 2. Dark overlay on hover (z-10) */}
          //     <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-2xl" />

          //     {/* 3. Rating badge - top left (z-30, always visible) */}
          //     <div className="absolute top-2 left-2 flex items-center gap-1 rounded-xl px-2 py-1 bg-black/70 text-sm z-30">
          //       <svg
          //         xmlns="http://www.w3.org/2000/svg"
          //         viewBox="0 0 24 24"
          //         fill="currentColor"
          //         className="w-4 h-4 text-yellow-400"
          //       >
          //         <path
          //           fillRule="evenodd"
          //           d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
          //           clipRule="evenodd"
          //         />
          //       </svg>
          //       <span className="text-white">
          //         {movie.vote_average?.toFixed(1)}
          //       </span>
          //     </div>

          //     {/* 4. Play button - centered (z-20) */}
          //     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          //       <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          //         <svg
          //           xmlns="http://www.w3.org/2000/svg"
          //           viewBox="0 0 24 24"
          //           fill="currentColor"
          //           className="w-10 h-10 text-white ml-1"
          //         >
          //           <path
          //             fillRule="evenodd"
          //             d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
          //             clipRule="evenodd"
          //           />
          //         </svg>
          //       </div>
          //     </div>

          //     {/* 5. Title & year - bottom (z-20) */}
          //     <div className="absolute inset-x-0 bottom-0 p-3 z-20 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
          //       <p className="font-semibold text-white group-hover:text-purple-400 text-sm leading-tight">
          //         {movie.title}
          //       </p>
          //       <p className="text-gray-400 text-[12px] mt-0.5">
          //         {movie.release_date?.slice(0, 4)}
          //       </p>
          //     </div>
          //   </div>
          // </Link>

          <MediaCard
            id={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            rating={movie.vote_average}
            year={movie.release_date}
            path={"movie"}
          />
        ))}
      </div>

      {/* <PaginationComponent endpoint={''}/> */}

      {/* Pagination controls */}
      <div className="flex items-center justify-center gap-4 mb-10 mt-10 ">
        <button
          onClick={handleprev}
          disabled={page <= 1}
          className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          Previous
        </button>
        <span className="text-white">
          Page {page} of {totalPages || 1}
        </span>
        <button
          onClick={handlenext}
          disabled={page >= totalPages}
          className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          Next
        </button>
      </div>
    </section>
  );
}

// function PaginationComponent({endpoint}) {
//   const { handleprev, handlenext, totalPages, page } = useTMDBEndPoint(endpoint);
//   return (
//     <div className="flex items-center justify-center gap-4 mb-10 mt-10 ">
//       <button
//         onClick={handleprev}
//         disabled={page <= 1}
//         className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
//       >
//         Previous
//       </button>
//       <span className="text-white">
//         Page {page} of {totalPages || 1}
//       </span>
//       <button
//         onClick={handlenext}
//         disabled={page >= totalPages}
//         className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
//       >
//         Next
//       </button>
//     </div>
//   );
// }

export default Movie;
