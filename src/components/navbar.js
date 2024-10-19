import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import SocialMediaContainer from "./socialMediaContainer";
import {
  toggleIconAnimation,
  toggleSideMenuAnimation,
} from "../gsapAnimations/animations";
import { companyDetails } from "../utils/companyDetails";

import MainLogoImg from "../assets/logos/MainLogoImg.png";

// import { FaFacebook } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import GalleryImg1 from "../assets/gallery/GalleryImg1.png";
import GalleryImg2 from "../assets/gallery/GalleryImg2.png";
import GalleryImg3 from "../assets/gallery/GalleryImg3.png";
import GalleryImg4 from "../assets/gallery/GalleryImg4.png";
import GalleryImg5 from "../assets/gallery/GalleryImg5.png";
import GalleryImg6 from "../assets/gallery/GalleryImg6.png";
import GalleryImg7 from "../assets/gallery/GalleryImg7.png";
import GalleryImg8 from "../assets/gallery/GalleryImg8.png";

function Navbar({ galleryRef }) {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [firstRender, setFirstRender] = useState(false);

  const navRef = useRef();
  const burgerIconRef = useRef();
  const closeIconRef = useRef();
  const sideMenuRef = useRef();

  const { contextSafe } = useGSAP();

  const navEntry = contextSafe(() => {
    const tl = gsap.timeline();
    tl.from(navRef.current, {
      y: -50,
      duration: 0.5,
      opacity: 0,
    });

    tl.from(
      navRef.current.children,
      {
        y: -30,
        duration: 0.5,
        opacity: 0,
        stagger: 0.2,
      },
      "-=0.3"
    );
  });

  useEffect(() => {
    navEntry();
  }, []);

  const handleSideMenuClick = contextSafe(() => {
    if (firstRender === false) {
      setFirstRender(true);
    }
    setSideMenuOpen(!sideMenuOpen);
    toggleIconAnimation(burgerIconRef, closeIconRef, sideMenuOpen);
    toggleSideMenuAnimation(sideMenuRef, sideMenuOpen);
  });

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

  useEffect(() => {
    if (sideMenuOpen) {
      const windowWidth = window.innerWidth;
      if (windowWidth > 1024) {
        document.body.style.width = "99vw";
      }
      document.body.style.overflowY = "hidden";
      document.body.addEventListener("click", handleOutsideClick);
    } else {
      document.body.style.overflowY = "auto";
      document.body.removeEventListener("click", handleOutsideClick);
    }
  }, [sideMenuOpen]);

  const handleOutsideClick = (event) => {
    if (!event.target.closest(".side-menu")) {
      handleSideMenuClick();
    }
  };

  const handleGalleryViewClick = () => {
    galleryRef.current.scrollIntoView({ behavior: "smooth" });
    handleSideMenuClick();
  };
  return (
    <nav
      ref={navRef}
      className=" side-menu fixed bg-white top-0 z-20 w-full h-[60px] shadow-md px-10 flex justify-between items-center"
    >
      <img className=" w-[120px]" src={MainLogoImg} alt="Logo" />
      <div className=" flex justify-center items-center gap-5">
        <SocialMediaContainer />
        <IoMenu
          ref={burgerIconRef}
          onClick={handleSideMenuClick}
          className={`burgerIcon w-10 h-10 cursor-pointer ${
            sideMenuOpen ? "hidden" : ""
          }`}
        />
        <IoClose
          ref={closeIconRef}
          onClick={handleSideMenuClick}
          className={`closeIcon w-10 h-10 cursor-pointer ${
            sideMenuOpen ? "" : "hidden"
          } `}
        />
      </div>
      {/* SideBar menu */}
      {firstRender && (
        <div
          ref={sideMenuRef}
          className={` absolute z-10 top-[60px] right-0 w-[280px] md:w-[400px] h-auto rounded-md bg-gray-50 
       flex flex-col items-start gap-5 p-10 shadow-md
      `}
        >
          <div>
            <span>We are social</span>
            <SocialMediaContainer />
          </div>
          <div className=" w-full flex flex-col justify-start items-start gap-2">
            <span>Contact Us</span>
            <div className=" w-full flex flex-wrap justify-between items-center gap-5">
              <span>{companyDetails.companyPhone}</span>
              <span>{companyDetails.companyEmail}</span>
            </div>
          </div>
          <div className=" w-full  flex flex-col justify-start items-start gap-2">
            <div className=" w-full flex flex-wrap justify-between items-center gap-5">
              <span>Gallery</span>
              <button
                onClick={handleGalleryViewClick}
                className=" text-white font-semibold px-2 py-1 
              bg-sky-500 rounded-md cursor-pointer"
              >
                View All
              </button>
            </div>
            <div className=" w-full flex flex-wrap gap-2">
              {galleryImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Gallery"
                  className=" w-[50px] md:w-[100px]"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
