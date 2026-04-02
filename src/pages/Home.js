// import Navbar from "../Components/NavBar";
import Hero from "../Components/Hero";
import TrendingMovie from "../Components/TrendingMovie";
import PopularMovie from "../Components/PopularMovie";
import TopRatedMovie from "../Components/TopRatedMovie";
import UpComingMovie from "../Components/UpComingMovie";
import TvShowDetails from './TvShowDetails'

function Home() {
  return (
    <div>
      <Hero />
      <TrendingMovie/>
      <PopularMovie />
      <TopRatedMovie />
      <UpComingMovie />
      <TvShowDetails/>
    </div>
  );
}

export default Home;
