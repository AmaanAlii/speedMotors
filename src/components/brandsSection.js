import { useEffect, useState } from "react";
import BrandLogoImg1 from "../assets/brands/BrandLogo1.png";
import BrandLogoImg2 from "../assets/brands/BrandLogo2.png";
import BrandLogoImg3 from "../assets/brands/BrandLogo3.png";
import BrandLogoImg4 from "../assets/brands/BrandLogo4.png";
import BrandLogoImg5 from "../assets/brands/BrandLogo5.png";
import BrandLogoImg6 from "../assets/brands/BrandLogo6.png";
import BrandLogoImg7 from "../assets/brands/BrandLogo7.png";
import BrandLogoImg8 from "../assets/brands/BrandLogo8.png";
import BrandLogoImg9 from "../assets/brands/BrandLogo9.png";

import BrandExampleImg1 from "../assets/home/SpeedAutomotivesImgs/BrandExampleImg1.png";
import BrandExampleImg2 from "../assets/home/SpeedAutomotivesImgs/BrandExampleImg2.png";
import BrandExampleImg3 from "../assets/home/SpeedAutomotivesImgs/BrandExampleImg3.png";
import BrandExampleImg4 from "../assets/home/SpeedAutomotivesImgs/BrandExampleImg4.png";
import BrandExampleImg5 from "../assets/home/SpeedAutomotivesImgs/BrandExampleImg5.png";
import BrandExampleImg6 from "../assets/home/SpeedAutomotivesImgs/BrandExampleImg6.png";
import BrandExampleImg7 from "../assets/home/SpeedAutomotivesImgs/BrandExampleImg7.png";
import BrandExampleImg8 from "../assets/home/SpeedAutomotivesImgs/BrandExampleImg8.png";
import BrandExampleImg9 from "../assets/home/SpeedAutomotivesImgs/BrandExampleImg9.png";

function BrandsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalDuration, setIntervalDuration] = useState(3000);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevValue) => (prevValue + 1) % brandLogos.length);
    }, intervalDuration);

    return () => clearInterval(intervalId);
  }, [intervalDuration]);

  const handleImageClick = (imageIndex) => {
    setCurrentIndex(imageIndex);
    setIntervalDuration(5000);
    setTimeout(() => {
      setIntervalDuration(3000);
    }, 5000);
  };

  const brandLogos = [
    BrandLogoImg1,
    BrandLogoImg2,
    BrandLogoImg3,
    BrandLogoImg4,
    BrandLogoImg5,
    BrandLogoImg6,
    BrandLogoImg7,
    BrandLogoImg8,
    BrandLogoImg9,
  ];

  const BrandExampleImgs = [
    BrandExampleImg1,
    BrandExampleImg2,
    BrandExampleImg3,
    BrandExampleImg4,
    BrandExampleImg5,
    BrandExampleImg6,
    BrandExampleImg7,
    BrandExampleImg8,
    BrandExampleImg9,
  ];
  return (
    <div className=" w-full flex flex-col justify-center items-center gap-10 mt-10 mb-16">
      <div className=" relative w-full h-[2px] bg-gray-200">
        <span className=" absolute -top-2 left-[30%] md:-top-2 md:left-[42vw] px-5 bg-white ">
          Brands With Speed
        </span>
      </div>
      <div className=" w-[90%] flex justify-between items-center flex-wrap gap-5">
        {brandLogos.map((img, index) => (
          <img
            onClick={() => handleImageClick(index)}
            className={`max-w-[100px] cursor-pointer ${
              index === currentIndex
                ? " border-2 border-gray-600 p-2 rounded-lg"
                : ""
            }`}
            key={index}
            src={img}
            alt="Brand"
          />
        ))}
      </div>

      <img
        className=" w-[300px] md:w-[80%]"
        src={BrandExampleImgs[currentIndex]}
      />
    </div>
  );
}

export default BrandsSection;
