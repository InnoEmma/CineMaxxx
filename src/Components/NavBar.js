import { NavLink } from "react-router-dom";
import Search from "./Search";

function NavBar() {
  function NavLinkClass({ isActive }) {
    if (isActive) {
      return "text-primaryPurple underline decoration-primaryPurple-900 underline-offset-[15px]";
    } else {
      return "";
    }
  }
  return (
    <nav className="flex gap-4 items-ce justify-between decoration py-4 px-20 fixed w-full shadow-md top-0 left-0 bg-transparent z-50 backdrop-blur-md ">
      <h2 className="text-2xl font-bold w">
        <span className="">Cine</span>
        <span className="text-primaryPurple">Maxxx</span>
      </h2>
      <div className="flex gap-8 text-[18px] leading-7 font-normal">
        <NavLink to="/" className={NavLinkClass}>
          <h3>Home</h3>
        </NavLink>
        <NavLink to="movies/popular" className={NavLinkClass}>
          <h3>Movie</h3>
        </NavLink>
        <NavLink to="tv-shows/popular" className={NavLinkClass}>
          <h3>Tv Shows</h3>
        </NavLink>
      </div>
      <div>
        <Search />
      </div>
    </nav>
  );
}

export default NavBar;
