import React, { useEffect } from "react";
import NavigationBar from "../components/layouts/navigationBar/navigationBar";
import Sidebar from "../components/layouts/sidebar/sidebar";
import Header from "../admin components/headerOngoing";
import DaftarAnime from "../components/tableanime/daftaranimeOngoing";

const Daftaranime = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Mengatur posisi scroll ke bagian atas saat halaman dimuat
  }, []);

  return (
    <React.Fragment>
      <NavigationBar />
      <Sidebar />

       <Header />


<div  className="ms-[100px] " >
      <DaftarAnime />
      </div>

    </React.Fragment>
  );
};

export default Daftaranime;
