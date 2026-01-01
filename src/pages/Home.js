import Navbar from "../Components/NavBar";
import Hero from "../Components/Hero";
import TrendingMovie from "../Components/TrendingMovie";
import PopularMovie from "../Components/PopularMovie";
import TopRatedMovie from "../Components/TopRatedMovie";
import UpComingMovie from "../Components/UpComingMovie";

function Home() {
  return (
    <div>
      <Hero />
      <TrendingMovie/>
      <PopularMovie />
      <TopRatedMovie />
      <UpComingMovie />
    </div>
  );
}

export default Home;
