import React, { useEffect, useState } from "react";
import NavigationBar from "../components/layouts/navigationBar/navigationBar";
import Sidebar from "../components/layouts/sidebar/sidebar";

const Favorit = () => {
  const [isToogle, setIsToogle] = useState(false);
  const toogleClick = () => {
    setIsToogle(!isToogle);
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Mengatur posisi scroll ke bagian atas saat halaman dimuat
  }, []);

  return (
    <React.Fragment>
      <Sidebar />
      <div>
        <NavigationBar />

      </div>
    </React.Fragment>
  );
};
export default Favorit;
