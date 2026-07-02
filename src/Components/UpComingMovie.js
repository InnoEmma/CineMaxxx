
// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import React, { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow"; // Import the effect styles
import "swiper/css/pagination";
import { keyboard } from "@testing-library/user-event/dist/keyboard";


export default function UpComingMovie() {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
  const API_KEY = "f419fd0513194bb3e5a8781bc1d4f30e";
  const [upComeMovie, setUpComeMovie] = useState({});

  useEffect(function () {
    async function FetchUpComingMovie() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US`,
      );
      const data = await res.json();
      setUpComeMovie(data);
    }
    FetchUpComingMovie();
  }, []);

  const swiperRef = useRef(null);
  return (
    <section>
      {/* <h1 className="ml-16 font-bold text-3xl mt-20 mb-10">UpComingMovie</h1> */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold ml-6 lg:ml-14 mt-20 mb-10">
          Upcoming Movie
        </h1>
        <button className=" mr-16 text-primaryPurple">Explore all</button>
      </div>
      <div className="mx-10 relative group">
        <Swiper
          slidesPerGroup={2}
          slidesPerView={2}
          spaceBetween={10}
          loop={true}
          pagination={{ dynamicBullets: true, clickable: true }}
          modules={[Navigation, Pagination, keyboard]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            640: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 15,
            },

            1024: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          {upComeMovie.results?.map((upCome) => (
            <SwiperSlide className="">
              <Link to={`movie/${upCome.id}`}>
                <div className="relative group/card cursor-pointer overflow-hidden rounded-3xl">
                  <img
                    src={`${IMAGE_BASE_URL}${upCome.poster_path}`}
                    alt="upcome"
                    className="rounded-3xl object-cover h-full w-full duration-500 transition-all group-hover/card:scale-125"
                  />
                  <div className="absolute inset-0 flex items-center justify-end flex-col pb-3 z-20">
                    <p>{upCome.title}</p>
                    <p>{upCome.release_date.slice(0, 4)}</p>
                  </div>

                  <div className="absolute left-3 top-3 flex items-center space-x-1 z-20 bg-black/70 py-1 px-2 rounded-3xl text-sm font-bold">
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
                      {upCome.vote_average > 1
                        ? upCome.vote_average.toFixed(1)
                        : "Nan"}
                    </p>
                  </div>

                  <div className="absolute inset-0 flex justify-center items-center group-hover/card:opacity-100 opacity-0 z-20">
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

                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover/card:opacity-100 z-10"></div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute top-1/2 right-0 -translate-y-1/2 z-40 rounded-full bg-white/90 text-black p-3 -mr-6 shadow-2xl duration-300 opacity-0 group-hover:opacity-100 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
          <button
            onClick={() => swiperRef.current.slidePrev()}
            className="absolute top-1/2 left-0 z-40 -translate-y-1/2 bg-white/90 rounded-full p-3 text-black shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
