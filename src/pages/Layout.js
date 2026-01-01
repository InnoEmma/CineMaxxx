import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function Layout() {
  return (
    //  m-auto max-w-[1440px]
    <div className="bg-primaryBackGroundBlack text-primaryWhite m-auto max-w-[1440px]">
      <>
        <NavBar />
        {/* <h1>There we Goo</h1> */}
        <Outlet />
        <Footer />
      </>
    </div>
  );
}

export default Layout;
