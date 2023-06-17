import React, { useEffect } from "react";
import NavigationBar from "../components/layouts/navigationBar/navigationBar";
import Sidebar from "../components/layouts/sidebar/sidebar";
import Genre from "../components/genreAnime/genre";
import DaftarAnime from "../components/tableanime/daftaranime";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Mengatur posisi scroll ke bagian atas saat halaman dimuat
  }, []);

  return (
    <React.Fragment>
      <Sidebar />
      <div>
        <NavigationBar />
        <div className="home ps-[100px] mt-[100px]">
          <div className="ms-[30px]">
            <div className="ucapan mt-[40px]">
              <h3 className="text-[28px] font-semibold">Good Morning, Nanaa</h3>
            </div>
            <Genre />
          </div>
          <div>
            <div>
              <h2 className="text-[25px] mt-[30px] mb-3 font-semibold ms-3">
                Mostly Played
              </h2>
              <DaftarAnime />

   
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
