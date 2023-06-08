import React from "react";
import NavigationBar from "../components/layouts/navigationBar/navigationBar";
import Sidebar from "../components/layouts/sidebar/sidebar";
import Genre from "../components/genreAnime/genre";



const Home = () => {
  return (
    <React.Fragment>
      <Sidebar />
        <NavigationBar />
        <div className="home ps-[100px]">
          <div className="ms-[30px]">
            <div className="ucapan mt-[40px]">
              <h3 className="text-[28px] font-semibold">Good Morning, Silverth</h3>
            </div>
            <Genre />
          </div>
          <div className="flex">
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
