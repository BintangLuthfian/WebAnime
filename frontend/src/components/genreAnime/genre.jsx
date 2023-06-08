import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
// import { Pagination } from "swiper";

import "./genre.css";
import ContentSwiper from "./contentSwiper";

const Genre = () => {
  return (
    <div className="genre mt-[50px]">
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        // modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ContentSwiper img="./assets/album cover/1.jpg" genre=" Action" />
        </SwiperSlide>
        <SwiperSlide>
          <ContentSwiper img="./assets/album cover/2.jpg" genre="Award Winning" />
        </SwiperSlide>
        <SwiperSlide>
          <ContentSwiper img="./assets/album cover/3.jpg" genre="Fantasy" />
        </SwiperSlide>
        <SwiperSlide>
          <ContentSwiper img="./assets/album cover/7.jpg" genre="Romance" />
        </SwiperSlide>
        <SwiperSlide>
          <ContentSwiper img="./assets/album cover/5.jpg" genre="Drama" />
        </SwiperSlide>
        <SwiperSlide>
          <ContentSwiper img="./assets/album cover/6.jpg" genre="fantasi" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Genre;
