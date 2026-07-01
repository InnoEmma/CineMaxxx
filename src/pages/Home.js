// import Navbar from "../Components/NavBar";
import Hero from "../Components/Hero";
import TrendingMovie from "../Components/TrendingMovie";
import PopularMovie from "../Components/PopularMovie";
import TopRatedMovie from "../Components/TopRatedMovie";
import UpComingMovie from "../Components/UpComingMovie";
import TvShowDetails from './TvShowDetails'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div>
      <Hero />
      <TrendingMovie/>
      <PopularMovie />
      <TopRatedMovie />
      <UpComingMovie />
      <Footer/>
      {/* <TvShowDetails/> */}
    </div>
  );
}

export default Home;
