import { useGSAP } from "@gsap/react";
import BrandLogoImg1 from "../assets/brands/BrandLogo1.png";
import BrandLogoImg2 from "../assets/brands/BrandLogo2.png";
import BrandLogoImg3 from "../assets/brands/BrandLogo3.png";
import BrandLogoImg4 from "../assets/brands/BrandLogo4.png";
import BrandLogoImg5 from "../assets/brands/BrandLogo5.png";
import BrandLogoImg6 from "../assets/brands/BrandLogo6.png";
import BrandLogoImg7 from "../assets/brands/BrandLogo7.png";
import BrandLogoImg8 from "../assets/brands/BrandLogo8.png";

import HomeBannerBgImg from "../assets/home/HomeBannerBgImg.png";
import {
  homeBannerBgHover,
  homeBannerEntry,
} from "../gsapAnimations/animations";
import { useEffect, useRef } from "react";

function HomeBanner() {
  const brandLogos = [
    // BrandLogoImg1,
    BrandLogoImg2,
    BrandLogoImg3,
    BrandLogoImg4,
    BrandLogoImg5,
    BrandLogoImg6,
    BrandLogoImg7,
    BrandLogoImg8,
  ];

  const homeBannerRef = useRef();

  const { contextSafe } = useGSAP();

  const animateBanner = contextSafe(() => {
    // Trigger entry animation on load
    homeBannerEntry(homeBannerRef);

    // Trigger background hover animation
    homeBannerBgHover(homeBannerRef);
  });

  useEffect(() => {
    animateBanner();
  }, []);

  const handleExploreButtonClick = () => {
    window.scrollTo({
      top: 800,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={homeBannerRef}
      style={{ backgroundImage: `url(${HomeBannerBgImg})` }}
      className=" bg-no-repeat bg-bottom bg-cover w-full h-auto md:h-[600px]
      flex flex-col justify-start items-center gap-5 px-10"
    >
      <div className=" flex flex-col justify-center items-center gap-5 mt-16 mb-14">
        <h2 className=" text-xl md:text-3xl font-bold">
          PROVIDING AN EXCEPTIONAL <br />{" "}
          <span className=" text-[#009ADA]">DEALERSHIP EXPERIENCE</span>
        </h2>
        <h3 className=" md:text-2xl">
          PROVIDING AN EXCEPTIONAL DEALERSHIP EXPERIENCE
        </h3>
      </div>
      <div className=" w-full flex justify-between items-center flex-wrap gap-5">
        {brandLogos.map((img, index) => (
          <img className=" max-w-[100px]" key={index} src={img} alt="Brand" />
        ))}
      </div>
      <button
        onClick={handleExploreButtonClick}
        className=" mt-10 px-4 py-1 border-2 text-[#009ADA] border-[#009ADA] rounded-lg"
      >
        Explore Now
      </button>
    </section>
  );
}

export default HomeBanner;
