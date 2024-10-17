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
    setInitiateAnimation(true);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setTimeout(() => {
        setInitiateAnimation(false); // Reset animation after scrolling
      }, 1500); // Duration matches the animation timing
    }, 1500); // Wait for the skid animation to complete
  };

  return (
    <div
      onClick={handleImageClick}
      className={`fixed z-10 right-10 transition-all duration-700 ease-in-out ${
        showButton ? "bottom-14" : "bottom-[200%]"
      }`}
    >
      {/* Car Image */}
      <img
        className={`w-[50px] cursor-pointer transition-transform ${
          initiateAnimation ? "animate-skid" : ""
        }`}
        src={GoToTopImg}
        alt="Car"
      />

      {/* Smoke Trail */}
      {initiateAnimation && (
        <>
          <div className="absolute rotate-90 left-[15px] bottom-[-20px] flex space-x-1">
            <div className="w-1 h-1 bg-gray-300 rounded-full opacity-50 animate-smoke"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full opacity-40 animate-smoke delay-100"></div>
            <div className="w-5 h-5 bg-gray-500 rounded-full opacity-30 animate-smoke delay-200"></div>
          </div>
          <div className="absolute rotate-90 right-[15px] bottom-[-20px] flex space-x-1">
            <div className="w-1 h-1 bg-gray-300 rounded-full opacity-50 animate-smoke"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full opacity-40 animate-smoke delay-100"></div>
            <div className="w-5 h-5 bg-gray-500 rounded-full opacity-30 animate-smoke delay-200"></div>
          </div>
        </>
      )}
    </div>
  );
}

export default GoToTop;
