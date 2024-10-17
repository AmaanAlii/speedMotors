import { useEffect, useState } from "react";
import GoToTopImg from "../assets/home/GoToTopImg.png";

function GoToTop() {
  const [initiateAnimation, setInitiateAnimation] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleShowButton);

    return () => window.removeEventListener("scroll", handleShowButton);
  }, []);

  const handleImageClick = () => {
    let intervalId;
    intervalId = setInterval(() => {
      setInitiateAnimation((prevState) => !prevState);
    }, 100);
    setTimeout(() => {
      clearInterval(intervalId);
      setInitiateAnimation(false);
    }, 700);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={handleImageClick}
      className={` fixed z-10 right-10 transition-all duration-700 ease-in-out ${
        showButton ? " bottom-14" : " bottom-[200%]"
      }
      ${
        initiateAnimation
          ? " transition-transform duration-100  ease-in-out rotate-45"
          : " -rotate-45 "
      }
      `}
    >
      <img
        className={` w-[50px] cursor-pointer ${showButton ? " rotate-45" : ""}`}
        src={GoToTopImg}
        alt="Car"
      />
    </div>
  );
}

export default GoToTop;
