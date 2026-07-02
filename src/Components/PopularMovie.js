import { Swiper, SwiperSlide } from "swiper/react";
// Import required modules from the 'modules' directory
import {
  Navigation,
  Pagination,
  // Scrollbar,
  // A11y,
  Keyboard,
} from "swiper/modules";

import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Link } from "react-router-dom";
// import { keyboard } from "@testing-library/user-event/dist/keyboard";

function PopularMovie() {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
  const API_KEY = "f419fd0513194bb3e5a8781bc1d4f30e";
  const swiperRef = useRef(null);
  const [popMovie, setPopMovie] = useState({});

  useEffect(function () {
    async function FetchPopMovie() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`
      );
      const data = await res.json();
      setPopMovie(data);
    }
    FetchPopMovie();
  }, []);
  // tempTrend.results.map((el)=> el.title)
  // console.log(popMovie.results.map((pop) => pop.title));
  return (
    <section>
      <div className="px-6 xl:px-10 pt-24">
        {/* <h1 className="text-3xl font-bold pb-9 xl:px-5">Popular Movie</h1> */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold  pb-9 xl:px-5">Popular Movies</h1>
          <button className=" text-primaryPurple">Explore all</button>
        </div>

        <div className="relative group">
          <Swiper
            slidesPerView={2}
            spaceBetween={15}
            slidesPerGroup={2}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 15  , slidesPerGroup:3},
              1024: { slidesPerView: 5, spaceBetween: 20, slidesPerGroup: 5 },
            }}
            loop={true}
            pagination={{ dynamicBullets: true, clickable: true }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Navigation, Pagination, Keyboard]}
            className="w-full mySwiper"
          >
            {popMovie.results?.map((pop) => (
              <SwiperSlide key={pop.id} className="cursor-pointer">
                <Link to={`movie/${pop.id}`}>
                  <div className="relative group/card overflow-hidden rounded-xl aspect-[2/3]">
                    <img
                      src={`${IMAGE_BASE_URL}${pop.poster_path}`}
                      alt={pop.title}
                      className="object-cover h-full w-full transition-transform ease-in-out duration-500 group-hover/card:scale-125"
                    />

                    <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover/card:opacity-100 pointer-events-none">
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

                    <div className="absolute top-3 left-3 z-30 flex items-center bg-black/70 rounded-xl text-sm px-2 py-1 space-x-1">
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
                      <p className="text-white font-medium">
                        {pop.vote_average ? pop.vote_average.toFixed(1) : "N/A"}
                      </p>
                    </div>

                    {/* 4. TEXT INFO - Added z-20 so it sits ON TOP of the black gradient */}
                    <div className="absolute inset-0 flex flex-col items-center justify-end pb-4 z-20 text-center px-2">
                      <p className="text-white font-semibold truncate w-full">
                        {pop.title}
                      </p>
                      <p className="text-sm text-slate-300">
                        {pop.release_date ? pop.release_date.slice(0, 4) : ""}
                      </p>
                    </div>

                    {/* 5. BLACK GRADIENT HOVER - z-10 (Behind text, in front of image) */}
                    <div className="absolute inset-0 bg-black/70 to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100 z-10"></div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute top-1/2 -translate-y-1/2 left-0 z-40 p-3 bg-white/90 hover:bg-white text-black rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-4 xl:-ml-6"
            aria-label="Previous Slide"
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

          {/* Next Button */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute top-1/2 -translate-y-1/2 right-0 z-40 p-3 bg-white/90 hover:bg-white text-black rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 -mr-4 xl:-mr-6"
            aria-label="Next Slide"
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
        </div>
      </div>
    </section>
  );
}

export default PopularMovie;
