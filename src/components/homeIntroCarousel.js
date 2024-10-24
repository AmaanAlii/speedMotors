import React, { useRef, useState } from "react";

import HomeIntroCaraouselImg1 from "../assets/home/HomeIntroCarouselImg1.png";
import HomeIntroCaraouselImg2 from "../assets/home/HomeIntroCarouselImg2.png";

import HomeIntroCarouselImg3 from "../assets/home/HomeIntroCarouselImg3.jpeg";
import HomeIntroCarouselImg4 from "../assets/home/HomeIntroCarouselImg4.jpeg";
import HomeIntroCarouselImg5 from "../assets/home/HomeIntroCarouselImg5.jpeg";
import HomeIntroCarouselImg6 from "../assets/home/HomeIntroCarouselImg6.jpeg";
import HomeIntroCarouselImg7 from "../assets/home/HomeIntroCarouselImg7.jpeg";
import HomeIntroCarouselImg8 from "../assets/home/HomeIntroCarouselImg8.jpeg";
import HomeIntroCarouselImg9 from "../assets/home/HomeIntroCarouselImg9.jpeg";
import HomeIntroCarouselImg10 from "../assets/home/HomeIntroCarouselImg10.jpeg";
import HomeIntroCarouselImg11 from "../assets/home/HomeIntroCarouselImg11.jpeg";
import HomeIntroCarouselImg12 from "../assets/home/HomeIntroCarouselImg12.jpeg";
import HomeIntroCarouselImg13 from "../assets/home/HomeIntroCarouselImg13.jpeg";
import HomeIntroCarouselImg14 from "../assets/home/HomeIntroCarouselImg14.jpeg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

function HomeIntroCarousel() {
  const carouselImgs = [
    HomeIntroCarouselImg3,
    HomeIntroCarouselImg4,
    HomeIntroCarouselImg5,
    HomeIntroCarouselImg6,
    HomeIntroCarouselImg7,
    HomeIntroCarouselImg8,
    HomeIntroCarouselImg9,
    HomeIntroCarouselImg10,
    HomeIntroCarouselImg11,
    HomeIntroCarouselImg12,
    // HomeIntroCarouselImg13,
    HomeIntroCarouselImg14,
  ];

  return (
    <div className=" w-[90%] h-[80vh] flex justify-center items-center ">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        style={{ height: "100%" }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {carouselImgs.map((img, index) => (
          <SwiperSlide
            style={{
              // width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              key={index}
              className=" h-[100%] object-contain rounded-lg"
              src={img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HomeIntroCarousel;
