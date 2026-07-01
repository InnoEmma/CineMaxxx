// import cinder from "../cinder.jpg";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Calendar, PlayCircle } from "lucide-react";
import { Star } from "lucide-react";
import { Clock } from "lucide-react";
import Loader from "../Components/Loader";
// import cinderImage from "../cinderImage.jpg";
import NoImage from "../NoImage.png";

function MovieDetails() {
  const navigate = useNavigate();

  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
  const [activeTab, setActiveTab] = useState(0);
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [more, setMore] = useState([]);

  const [utube, setUtube] = useState({});
  // const d = details.overview;

  const [detCast, setDetCast] = useState({});
  const castContent = (
    <div className="flex gap-8 flex-wrap">
      {detCast?.cast?.map((cas) => (
        <div className="flex-shrink-0 min-w-[140px]" key={cas.id}>
          <div className=" text-sm flex items-center justify-center flex-col">
            <img
              src={IMAGE_BASE_URL + cas.profile_path}
              alt={cas.name}
              onError={(e) => {
                e.currentTarget.src = NoImage;
              }}
              className="w-16 h-16 object-cover object-center rounded-full"
            />
            <h1 className="truncate whitespace-nowrap">{cas.name}</h1>
            <p className="text-[12px]  text-gray-500">{cas.character}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const similarMovie = (
    <div className="flex gap-5 flex-wrap">
      {more.length > 1 ? (
        more.map((simi) => (
          <Link to={`/movie/${simi.id}`}>
            <div
              className="grid items-center justify-center relative group overflow-hidden rounded-2xl"
              key={simi.id}
            >
              {/* <p>{simi.title}</p> */}
              <img
                src={`${IMAGE_BASE_URL}${simi.poster_path}`}
                className="w-[222px] rounded-2xl cursor-pointer h-full object-cover group-hover:scale-125 transition-all duration-500 hover:"
                alt="similar imageposter"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-2">
                <div className="z-20 group-hover:scale-110 overflow-hidden transition-all duration-500 pl-3">
                  <p className="font-semibold group-hover:text-primaryPurple text-sm">
                    {simi.title}
                  </p>
                  <p className="text-[12px]">{simi.release_date.slice(0, 4)}</p>
                </div>
              </div>
              <div className="absolute top-2 items-center gap-1 rounded-2xl ml-2 px-2 text-sm py-1 bg-black/70 pt-1 group:bg-gray-300 flex z-30">
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

                <div>{simi.vote_average?.toFixed(1)}</div>
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

              <div className="absolute inset-0 group bg-black/70 opacity-0 group-hover:opacity-100 group-hover:cursor-pointer z-10"></div>
            </div>
          </Link>
        ))
      ) : (
        <p>No similar Movie</p>
      )}
    </div>
  );

  const tabs = [
    { label: "Overview", content: movie.overview },
    { label: "Cast", content: castContent },
    { label: "More like this", content: similarMovie },
  ];

  const { id } = useParams();
  const API_KEY = "f419fd0513194bb3e5a8781bc1d4f30e";

  useEffect(
    function () {
      async function fetchCastDetails() {
        try {
          const res = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
          );
          const data = await res.json();
          setDetCast(data);
        } catch (error) {}
      }
      fetchCastDetails();
    },
    [id],
  );
  // console.log(detCast);

  useEffect(
    function () {
      async function fetchMovie() {
        try {
          setIsLoading(true);

          const res = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`,
          );

          const data = await res.json();
          setMovie(data);
          setIsLoading(false);
        } catch (error) {
          <h1 className="mt-24">{error.message}</h1>;
          setIsLoading(false);
        } finally {
          setIsLoading(false);
        }
      }
      fetchMovie();
      // console.log(data);
    },
    [id],
  );
  // console.log(movie);
  // console.log(cinder);
  // console.log(id);

  useEffect(
    function () {
      async function fetchSimilar() {
        try {
          setIsLoading(true);

          const res = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US`,
          );

          const data = await res.json();
          setMore(data.results || []);

          setIsLoading(false);
        } catch (error) {
          <h1 className="mt-24">{error.message}</h1>;
          setIsLoading(false);
        } finally {
          setIsLoading(false);
        }
      }
      fetchSimilar();
    },
    [id],
  );

  useEffect(
    function () {
      async function watchUtube() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`,
          );
          const data = await res.json();
          // console.log(data);
          setUtube(data);
        } catch (error) {}
      }
      watchUtube();
    },
    [id],
  );
  const the_youtube_key = utube.results
    ?.filter((e) => e.type === "Trailer" && e.site === "YouTube")
    ?.map((e) => e.key)
    ?.join();
  // console.log(the_youtube_key);

  function playTrailer() {
    const the_youtube_link = `https://www.youtube.com/watch?v=${the_youtube_key}`;
    // console.log(the_youtube_link);

    const atag = document.createElement("a");
    atag.href = the_youtube_link;
    atag.target = "_blank";
    document.body.appendChild(atag);
    atag.click();
    document.body.removeChild(atag);
  }

  if (isLoading) {
    return (
      <div className=" flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }
  return (
    <section className="w-full">
      {/* Movie details page */}
      {/* <h1 className="mt-20">{movie.original_title}</h1> */}
      <div>
        <header className="relative">
          <img
            // src={details.belongs_to_collection.backdrop_path}
            src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
            alt="backdrop"
            style={{ height: "100vh" }}
            // clipPath: "inset(0% 0% 20% 0%)"
            className="object-cover pt-20 sm:pt-6 object-center   w-full h-full "
          />
          {/* <div className="absolute inset-0 bg-black/30"></div> */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black via-transparent via-80%"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-0% to-black"></div>
          <div className="absolute bottom-0 left-0 w-full h-4/5 bg-gradient-to-t from-black to-transparent "></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-30% to-black"></div>

          {/* <div className="">
            hello
          </div> */}
        </header>
        <div className="absolute top-[31%]  left-20 flex items-center justify-center gap-4">
          <div className="w-72 h-auto">
            <img
              src={`${IMAGE_BASE_URL}${movie?.poster_path}`}
              alt="poster"
              className="h-full w-full object-cover object-center rounded-xl"
            />
          </div>
          <div className="ml-5 mt-40">
            <h1 className="text-5xl font-extrabold mb-2 ">
              {movie?.original_title}
            </h1>
            <p className="text-slate-400">{movie?.tagline || ""}</p>
            <div className="flex mt-4 gap-4 ">
              <div className="flex gap-2 items-center">
                <Star size={28} color="yellow" />
                <p className="text-slate-300">{movie?.vote_average || 0}/10</p>
              </div>
              <div className="flex gap-2 items-center">
                <Calendar color="white" size={28} />
                <p className="text-slate-300">
                  {movie?.release_date?.slice() || ""}
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <Clock size={28} color="white" />
                <p className="text-slate-300">{movie?.runtime || ""} min</p>
              </div>
            </div>
            <div>
              <div className="flex mt-4 gap-4">
                {movie?.genres?.map((gen) => (
                  <p className="bg-primaryTagsPurple px-3 text-sm py-1 rounded-full">
                    {gen.name}
                  </p>
                ))}
              </div>
            </div>

            <div className="">
              {the_youtube_key ? (
                <button
                  onClick={playTrailer}
                  className={
                    the_youtube_key
                      ? `bg-white text-black mt-6 px-7 py-3 rounded-lg text-lg font-medium flex gap-3 items-center `
                      : `cursor-not-allowed`
                  }
                >
                  <PlayCircle
                    color="black"
                    // className="absolute top-[33px]  left-1 z-20"
                  />
                  Watch Trailer
                </button>
              ) : (
                <button
                  className={
                    the_youtube_key
                      ? `bg-white text-black mt-6 px-7 py-3 rounded-lg text-lg font-medium flex gap-3 items-center `
                      : " `bg-white text-black opacity-50"
                  }
                >
                  No trailer
                </button>
              )}
            </div>
          </div>
        </div>
        <section className="mt-20 ml-20 mr-20 ">
          <div className="space-x-10 flex">
            {tabs.map((MovieDet, index) => (
              <>
                <button onClick={() => setActiveTab(index)}>
                  <p className="text-lg">{MovieDet.label}</p>
                </button>
              </>
            ))}
          </div>
          <div className="border mt-4 mb-8 border-primaryPurple"></div>
          <div>
            <div>
              <p className="pb-10">{tabs[activeTab].content}</p>
              {/* <div className="flex gap-8 flex-wrap ">
                {detCast.cast.map((cas) => (
                  <div className="flex-shrink-0 min-w-[140px]">
                    <div className="text-sm flex items-center justify-center flex-col">
                      <img
                        src={IMAGE_BASE_URL + cas.profile_path}
                        alt="NoImage"
                        onError={(e) => {
                          e.currentTarget.src = NoImage;
                        }}
                        className="w-16 h-16 object-cover object-center  rounded-full"
                      />
                      <h1 className="truncate whitespace-nowrap">{cas.name}</h1>
                      <p>{cas.character}</p>
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default MovieDetails;
