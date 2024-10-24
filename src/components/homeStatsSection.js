import HomeStatsBgImg from "../assets/home/HomeStatsBgImg.jpg";
import { content } from "../websiteContent/content";
import HomeStatsCard from "./homeStatsCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

function HomeStatsSection() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${HomeStatsBgImg})` }}
        className=" bg-fixed bg-cover bg-no-repeat bg-center 
      w-full h-auto md:min-h-[30vh] hidden md:flex justify-center items-center flex-wrap gap-10
       px-5 py-10 "
      >
        {content?.statsContent?.map((data, index) => (
          <HomeStatsCard
            key={index}
            heading={data.heading}
            subText={data.subText}
          />
        ))}
      </div>
      <div
        style={{ backgroundImage: `url(${HomeStatsBgImg})` }}
        className=" bg-cover bg-no-repeat bg-center 
      w-full md:hidden flex justify-start items-center flex-wrap py-10 "
      >
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {content?.statsContent?.map((data, index) => (
            <SwiperSlide
              style={{
                display: "flex",
                justifyContent: "center",
                justifyItems: "center",
              }}
            >
              <HomeStatsCard
                key={index}
                heading={data.heading}
                subText={data.subText}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default HomeStatsSection;
