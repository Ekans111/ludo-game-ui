import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function OnlineOptionPage() {
  const navigate = useNavigate();
  const [option, setOption] = useState(0);
  return (
    <div
      className="min-h-screen flex pt-[5vh] justify-center p-4 bg-cover overflow-hidden items-center relative"
      style={{
        backgroundImage: "url(/image/bg.png)",
      }}
    >
      <Header />
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>All</SwiperSlide>
        <SwiperSlide>1 Winner</SwiperSlide>
        <SwiperSlide>1v1 Winner1</SwiperSlide>
        <SwiperSlide>2 Winners</SwiperSlide>
        <SwiperSlide>3 Winners</SwiperSlide>
      </Swiper>
      <div
        className="w-full absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center items-center bg-white bg-opacity-50"
        onClick={() => navigate("/menu")}
      >
        <img
          src="/image/home.png"
          alt="home"
          className="w-12 hover:scale-105 active:scale-95 cursor-pointer transition-all"
        />
      </div>
    </div>
  );
}
