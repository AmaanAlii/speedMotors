import React, { useRef, useState } from "react";

import HomeIntroCaraouselImg1 from "../assets/home/HomeIntroCarouselImg1.png";
import HomeIntroCaraouselImg2 from "../assets/home/HomeIntroCarouselImg2.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

function HomeIntroCarousel() {
  return (
    <div className=" w-[90%] ">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className=" w-full object-contain rounded-lg"
            src={HomeIntroCaraouselImg1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" w-full object-contain rounded-lg"
            src={HomeIntroCaraouselImg2}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HomeIntroCarousel;
