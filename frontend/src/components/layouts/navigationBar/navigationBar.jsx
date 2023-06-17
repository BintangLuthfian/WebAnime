import React, { useState, useEffect } from "react";
import ProfileMenu from "./profileMenu";

const NavigationBar = () => {
  const [bellImg, setBellImg] = useState("./assets/icon/bell2.png");

  useEffect(() => {
    const interval = setInterval(() => {
      setBellImg((prevImg) =>
        prevImg === "./assets/icon/bell2.png"
          ? "./assets/icon/bell1.png"
          : "./assets/icon/bell2.png"
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const seacrhStyle = {
    backgroundImage: "url('./assets/icon/search-Icon.svg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "20px",
    backgroundPosition: "10px center",
    paddingLeft: "35px",
    color: "black",
  };

  return (
    <nav
      className="border-gray-200 ms-[70px] bg-[#1B1A1B] "
      style={{ boxShadow: "0px 2px 2px rgba(255, 255, 255, 0.25)" }}
    >
      <div className="max-w-screen-xl flex items-center justify-between p-4">
        <input
          type="search"
          name="search"
          style={seacrhStyle}
          placeholder="Search top 5 global"
          className="py-[5px] w-[350px] rounded-md ms-[45px]"
        />
        <div className="flex items-center md:order-2">
           <ProfileMenu />
           <span className="ms-2 border-e-2 pe-5">Silverth</span>
          <img
            src={bellImg}
            alt=""
            className="mx-3 w-[18px] cursor-pointer"
            onClick={() => alert("Notification here")}
          />
          <div
            className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            id="user-dropdown"
          >
            </div> 
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
