import React, { useState } from "react";
import { Modal } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Thumbs } from "swiper/modules"; // Import Swiper modules

// Image imports
import GalleryBgImg from "../assets/home/GalleryBgImg.png";
import GalleryImg1 from "../assets/home/GalleryImg1.png";
import GalleryImg2 from "../assets/home/GalleryImg2.png";
import GalleryImg3 from "../assets/home/GalleryImg3.png";
import GalleryImg4 from "../assets/home/GalleryImg4.png";
import GalleryImg5 from "../assets/home/GalleryImg5.png";
import GalleryImg6 from "../assets/home/GalleryImg6.png";
import GalleryImg7 from "../assets/home/GalleryImg7.png";
import GalleryImg8 from "../assets/home/GalleryImg8.png";

const GallerySection = ({ galleryRef }) => {
  const galleryImages = [
    GalleryImg1,
    GalleryImg2,
    GalleryImg3,
    GalleryImg4,
    GalleryImg5,
    GalleryImg6,
    GalleryImg7,
    GalleryImg8,
  ];

  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const handleImageClick = (index) => {
    setPhotoIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    console.log("Button clicked");

    setOpen(false);
  };

  return (
    <div
      ref={galleryRef}
      style={{ backgroundImage: `url(${GalleryBgImg})` }}
      className="w-full flex justify-center items-center md:p-10 bg-cover bg-no-repeat bg-center"
    >
      <div className="w-full md:max-w-[90%] flex flex-col justify-start items-start gap-10">
        <h3 className="text-4xl pl-10 md:pl-0 text-gray-700 font-bold">
          Gall<span className="text-[#009ADA]">ery</span>
        </h3>
        <div className="w-[100%] hidden md:flex justify-center md:justify-start items-start gap-5 flex-wrap">
          {galleryImages.map((img, index) => (
            <img
              key={index}
              className="w-full md:w-[250px] cursor-pointer"
              src={img}
              alt="Gallery"
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>

        <div className="w-full md:hidden">
          {/* Swiper for Main Image */}
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation, Thumbs]}
            thumbs={{ swiper: thumbsSwiper }}
            initialSlide={photoIndex}
            onSlideChange={(swiper) => setPhotoIndex(swiper.activeIndex)}
            className="w-full"
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={index} style={{ width: "100%" }}>
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbnail Swiper */}
          {/* <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              modules={[Thumbs]}
              className="w-full mt-4"
            >
              {galleryImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-16 object-cover cursor-pointer"
                  />
                </SwiperSlide>
              ))}
            </Swiper> */}

          {/* Close Button */}
          {/* <button
            onClick={handleClose}
            className="absolute z-10 top-2 left-[45%] lg:top-2 lg:right-16 lg:left-0 text-white text-7xl"
          >
            &times;
          </button> */}
        </div>
      </div>

      {/* Fullscreen Modal with Swiper */}
      <Modal open={open} onClose={handleClose}>
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
          <div className="relative w-full mx-auto">
            {/* Swiper for Main Image */}
            <Swiper
              loop={true}
              spaceBetween={10}
              navigation={true}
              modules={[Navigation, Thumbs]}
              thumbs={{ swiper: thumbsSwiper }}
              initialSlide={photoIndex}
              onSlideChange={(swiper) => setPhotoIndex(swiper.activeIndex)}
              className="w-full h-full"
            >
              {galleryImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-[80vh] object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Thumbnail Swiper */}
            {/* <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              modules={[Thumbs]}
              className="w-full mt-4"
            >
              {galleryImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-16 object-cover cursor-pointer"
                  />
                </SwiperSlide>
              ))}
            </Swiper> */}

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute z-10 -top-10 right-[45%] lg:top-2 lg:right-16 text-white text-7xl"
            >
              &times;
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default GallerySection;
