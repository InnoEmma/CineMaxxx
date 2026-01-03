import Image1 from "../tempimage/Image1.jpg";
import Image2 from "../tempimage/Image2.jpg";
import Image3 from "../tempimage/Image3.jpg";
import Image4 from "../tempimage/Image4.jpg";
import Image5 from "../tempimage/Image5.jpg";
import Image6 from "../tempimage/Image6.jpg";
import Image7 from "../tempimage/Image7.jpg";
import Image8 from "../tempimage/Image8.jpg";
import Image9 from "../tempimage/Image9.jpg";
import Image10 from "../tempimage/Image10.jpg";
import Image11 from "../tempimage/Image11.jpg";
import Image12 from "../tempimage/Image12.jpg";
import image1 from "../tempimage/Image1.jpg";
import image2 from "../tempimage/Image2.jpg";
import image3 from "../tempimage/Image3.jpg";

// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import React, { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow"; // Import the effect styles
import "swiper/css/pagination";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

const tempTrend = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/44immBwzhDVyjn87b3x3l9mlhAD.jpg",
      id: 934433,
      title: "Scream VI",
      original_language: "en",
      original_title: "Scream VI",
      overview:
        "Following the latest Ghostface killings, the four survivors leave Woodsboro behind and start a fresh chapter.",
      poster_path: Image1,
      media_type: "movie",
      genre_ids: [27, 9648, 53],
      popularity: 609.941,
      release_date: "2023-03-08",
      video: false,
      vote_average: 7.374,
      vote_count: 684,
    },
    {
      adult: false,
      backdrop_path: "/b9UCfDzwiWw7mIFsIQR9ZJUeh7q.jpg",
      id: 868759,
      title: "Ghosted",
      original_language: "en",
      original_title: "Ghosted",
      overview:
        "Salt-of-the-earth Cole falls head over heels for enigmatic Sadie — but then makes the shocking discovery that she’s a secret agent. Before they can decide on a second date, Cole and Sadie are swept away on an international adventure to save the world.",
      poster_path: Image2,
      media_type: "movie",
      genre_ids: [10749, 28, 35],
      popularity: 619.83,
      release_date: "2023-04-21",
      video: false,
      vote_average: 7.318,
      vote_count: 359,
    },
    {
      adult: false,
      backdrop_path: "/iJQIbOPm81fPEGKt5BPuZmfnA54.jpg",
      id: 502356,
      title: "The Super Mario Bros. Movie",
      original_language: "en",
      original_title: "The Super Mario Bros. Movie",
      overview:
        "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
      poster_path: Image3,
      media_type: "movie",
      genre_ids: [16, 12, 10751, 14, 35],
      popularity: 7212.464,
      release_date: "2023-04-05",
      video: false,
      vote_average: 7.51,
      vote_count: 1452,
    },
    {
      adult: false,
      backdrop_path: "/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg",
      id: 640146,
      title: "Ant-Man and the Wasp: Quantumania",
      original_language: "en",
      original_title: "Ant-Man and the Wasp: Quantumania",
      overview:
        "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
      poster_path: Image4,
      media_type: "movie",
      genre_ids: [28, 12, 878],
      popularity: 9272.643,
      release_date: "2023-02-15",
      video: false,
      vote_average: 6.526,
      vote_count: 1879,
    },
    {
      adult: false,
      backdrop_path: "/7bWxAsNPv9CXHOhZbJVlj2KxgfP.jpg",
      id: 713704,
      title: "Evil Dead Rise",
      original_language: "en",
      original_title: "Evil Dead Rise",
      overview:
        "Two sisters find an ancient vinyl that gives birth to bloodthirsty demons that run amok in a Los Angeles apartment building and thrusts them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
      poster_path: Image5,
      media_type: "movie",
      genre_ids: [27, 53],
      popularity: 1898.367,
      release_date: "2023-04-12",
      video: false,
      vote_average: 6.965,
      vote_count: 201,
    },
    {
      adult: false,
      backdrop_path: "/fUVK7iUF0k9dU3MwV5MIKWMKGys.jpg",
      id: 298618,
      title: "The Flash",
      original_language: "en",
      original_title: "The Flash",
      overview:
        "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
      poster_path: Image6,
      media_type: "movie",
      genre_ids: [878, 28, 12],
      popularity: 170.114,
      release_date: "2023-06-14",
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: "/dQObIWkxfzKEDhtjOSoFnyCVgt0.jpg",
      id: 447365,
      title: "Guardians of the Galaxy Volume 3",
      original_language: "en",
      original_title: "Guardians of the Galaxy Volume 3",
      overview:
        "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
      poster_path: Image7,
      media_type: "movie",
      genre_ids: [878, 12, 28],
      popularity: 235.884,
      release_date: "2023-05-03",
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: "/ovM06PdF3M8wvKb06i4sjW3xoww.jpg",
      id: 76600,
      title: "Avatar: The Way of Water",
      original_language: "en",
      original_title: "Avatar: The Way of Water",
      overview:
        "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
      poster_path: Image8,
      media_type: "movie",
      genre_ids: [878, 12, 28],
      popularity: 3471.132,
      release_date: "2022-12-14",
      video: false,
      vote_average: 7.7,
      vote_count: 7530,
    },
    {
      adult: false,
      backdrop_path: "/m0mLjT3TkTXYU2e1XP3wmYDlIml.jpg",
      id: 873256,
      title: "Kiss, Kiss!",
      original_language: "pl",
      original_title: "Gorzko, gorzko!",
      overview:
        "Convinced he can charm any woman, a tenacious flirt sets his sights on a headstrong bride-to-be engaged to the son of an ambitious politician.",
      poster_path: Image9,
      media_type: "movie",
      genre_ids: [10749, 35],
      popularity: 41.779,
      release_date: "2023-04-26",
      video: false,
      vote_average: 7.25,
      vote_count: 4,
    },
    {
      adult: false,
      backdrop_path: "/wybmSmviUXxlBmX44gtpow5Y9TB.jpg",
      id: 594767,
      title: "Shazam! Fury of the Gods",
      original_language: "en",
      original_title: "Shazam! Fury of the Gods",
      overview:
        'Billy Batson and his foster siblings, who transform into superheroes by saying "Shazam!", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.',
      poster_path: Image10,
      media_type: "movie",
      genre_ids: [28, 35, 14],
      popularity: 4319.273,
      release_date: "2023-03-15",
      video: false,
      vote_average: 6.848,
      vote_count: 1215,
    },
    {
      adult: false,
      backdrop_path: "/eSVu1FvGPy86TDo4hQbpuHx55DJ.jpg",
      id: 700391,
      title: "65",
      original_language: "en",
      original_title: "65",
      overview:
        "65 million years ago, the only 2 survivors of a spaceship from Somaris that crash-landed on Earth must fend off dinosaurs and reach the escape vessel in time before an imminent asteroid strike threatens to destroy the planet.",
      poster_path: Image11,
      media_type: "movie",
      genre_ids: [878, 12, 53, 28],
      popularity: 1189.997,
      release_date: "2023-03-02",
      video: false,
      vote_average: 6.3,
      vote_count: 756,
    },
    {
      adult: false,
      backdrop_path: "/h8gHn0OzBoaefsYseUByqsmEDMY.jpg",
      id: 603692,
      title: "John Wick: Chapter 4",
      original_language: "en",
      original_title: "John Wick: Chapter 4",
      overview:
        "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
      poster_path: Image12,
      media_type: "movie",
      genre_ids: [28, 53, 80],
      popularity: 1312.743,
      release_date: "2023-03-22",
      video: false,
      vote_average: 7.975,
      vote_count: 1207,
    },
    {
      adult: false,
      backdrop_path: "/pbMbDlOAkVuvnxovBA2ENin59xH.jpg",
      id: 447277,
      title: "The Little Mermaid",
      original_language: "en",
      original_title: "The Little Mermaid",
      overview:
        "The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.",
      poster_path: Image12,
      media_type: "movie",
      genre_ids: [12, 10751, 14, 10749],
      popularity: 210.368,
      release_date: "2023-05-18",
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: "/rH3jY9JN9krUyE0Q3WLNtujMs8.jpg",
      id: 667538,
      title: "Transformers: Rise of the Beasts",
      original_language: "en",
      original_title: "Transformers: Rise of the Beasts",
      overview:
        "A ‘90s globetrotting adventure that introduces the Maximals, Predacons, and Terrorcons to the existing battle on earth between Autobots and Decepticons.",
      poster_path: Image6,
      media_type: "movie",
      genre_ids: [28, 12, 878],
      popularity: 161.222,
      release_date: "2023-06-07",
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: "/ifUfE79O1raUwbaQRIB7XnFz5ZC.jpg",
      id: 646385,
      title: "Scream",
      original_language: "en",
      original_title: "Scream",
      overview:
        "Twenty-five years after a streak of brutal murders shocked the quiet town of Woodsboro, a new killer has donned the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town’s deadly past.",
      poster_path: Image7,
      media_type: "movie",
      genre_ids: [27, 9648, 53],
      popularity: 373.035,
      release_date: "2022-01-12",
      video: false,
      vote_average: 6.737,
      vote_count: 2344,
    },
    {
      adult: false,
      backdrop_path: "/3GLrNvvkVJjBiffV8RsEh9Xg1eS.jpg",
      id: 997776,
      title: "Justice League x RWBY: Super Heroes & Huntsmen, Part One",
      original_language: "en",
      original_title:
        "Justice League x RWBY: Super Heroes & Huntsmen, Part One",
      overview:
        "Superman, Batman, Wonder Woman, Flash, Cyborg, Green Lantern and Vixen are transported to the strange world of Remnant and find themselves turned into teenagers. Meanwhile, Remnant heroes Ruby, Weiss, Blake and Yang must combine forces with the Justice League to uncover why their planet has been mysteriously altered before a superpowered Grimm destroys everything.",
      poster_path: Image8,
      media_type: "movie",
      genre_ids: [16, 28, 14],
      popularity: 107.913,
      release_date: "2023-04-25",
      video: false,
      vote_average: 8.238,
      vote_count: 21,
    },
    {
      adult: false,
      backdrop_path: "/z3Qc5a0grcCREAQKqI195P05dVf.jpg",
      id: 813726,
      title: "A Tourist's Guide to Love",
      original_language: "en",
      original_title: "A Tourist's Guide to Love",
      overview:
        "After an unexpected break up, a travel executive accepts an assignment to go undercover and learn about the tourist industry in Vietnam. Along the way, she finds adventure and romance with her Vietnamese expat tour guide and they decide to hijack the tour bus in order to explore life and love off the beaten path.",
      poster_path: Image9,
      media_type: "movie",
      genre_ids: [10749, 35, 12],
      popularity: 275.635,
      release_date: "2023-04-21",
      video: false,
      vote_average: 6.603,
      vote_count: 39,
    },
    {
      adult: false,
      backdrop_path: "/vcNXzOfACCXZA7vb8SNde0LUC9o.jpg",
      id: 1068141,
      title: "Mighty Morphin Power Rangers: Once & Always",
      original_language: "en",
      original_title: "Mighty Morphin Power Rangers: Once & Always",
      overview:
        "After tragedy strikes, an unlikely young hero takes her rightful place among the Power Rangers to face off against the team's oldest archnemesis.",
      poster_path: Image11,

      media_type: "movie",
      genre_ids: [28, 878, 14],
      popularity: 238.666,
      release_date: "2023-04-19",
      video: false,
      vote_average: 6.931,
      vote_count: 131,
    },
    {
      adult: false,
      backdrop_path: "/dlrWhn0G3AtxYUx2D9P2bmzcsvF.jpg",
      id: 536554,
      title: "M3GAN",
      original_language: "en",
      original_title: "M3GAN",
      overview:
        "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results.",
      poster_path: Image8,
      media_type: "movie",
      genre_ids: [878, 27, 35],
      popularity: 724.995,
      release_date: "2022-12-28",
      video: false,
      vote_average: 7.367,
      vote_count: 2426,
    },
    {
      adult: false,
      backdrop_path: "/xEn2SqJQ2uBAxSBfrcAqgiFDQCa.jpg",
      id: 944152,
      title: "Chokehold",
      original_language: "tr",
      original_title: "Boğa Boğa",
      overview:
        "Evading a scandal, a couple from Istanbul starts over in a town on the Aegean coast — but quickly discover the locals are determined to get rid of them.",
      poster_path: Image12,
      media_type: "movie",
      genre_ids: [53, 18],
      popularity: 246.108,
      release_date: "2023-04-21",
      video: false,
      vote_average: 5.6,
      vote_count: 15,
    },
  ],
  total_pages: 1000,
  total_results: 20000,
};

export default function UpComingMovie() {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
  const API_KEY = "f419fd0513194bb3e5a8781bc1d4f30e";
  const [upComeMovie, setUpComeMovie] = useState({});

  useEffect(function () {
    async function FetchUpComingMovie() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US`
      );
      const data = await res.json();
      setUpComeMovie(data);
    }
    FetchUpComingMovie();
  }, []);

  const swiperRef = useRef(null);
  return (
    <section>
      <h1 className="ml-16 font-bold text-3xl mt-20 mb-10">UpComingMovie</h1>
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
                    <p>{upCome.release_date.slice(0,4)}</p>
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
            className="absolute top-1/2 left-0 z-40 -translate-y-1/2 bg-white/90 rounded-full p-3 text-black shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"
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
