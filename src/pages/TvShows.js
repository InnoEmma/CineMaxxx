import { useEffect, useState } from "react";
import { data, Link } from "react-router-dom";
import Loader from "../Components/Loader";
import { preload } from "react-dom";
import { useTMDBEndPoint } from "../hooks/useTMDBEndPoint";
import MediaCard from "../Components/MediaCard";

// const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const API_KEY = "f419fd0513194bb3e5a8781bc1d4f30e";

function TvShows() {
  const { data, loading, page, totalPages, handlenext, handleprev } =
    useTMDBEndPoint("/tv/popular");


  if (loading) {
    return (
      <div className=" flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }
  return (
    <section className="w-full pt-32 bg-black pl-20 pr-20 pb-10">
      <h1 className="text-4xl mb-10 font-bold text-white">Popular TV Shows</h1>

      <div className="flex flex-wrap gap-5 w-full">
        {data.results?.map((show) => (
          <MediaCard
            id={show.id}
            title={show.name}
            posterPath={show.poster_path}
            rating={show.vote_average}
            year={show.first_air_date}
            path={"tv"}
          />
        ))}
      </div>

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

export default TvShows;
