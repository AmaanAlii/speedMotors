import { useEffect, useState } from "react";
import TimeLineBgImg from "../assets/home/TimeLineBgImg.png";
import { content } from "../websiteContent/content";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

import HomeTimeLineBottomImg from "../assets/home/HomeTimeLineBottomImg.png";

function TimeLineSection() {
  const timeLineData = content.timeLineContent;
  const [currentEventId, setcurrentEventId] = useState(timeLineData[0].id);
  const [currentEvent, setCurrentEvent] = useState(timeLineData[0]);
  const [disableButton, setDisableButton] = useState(false);

  const handleEventChange = (clickedEventId) => {
    setDisableButton(true);
    setcurrentEventId(clickedEventId);

    const currentEvent = timeLineData.find(
      (data) => data.id === clickedEventId
    );

    setCurrentEvent(currentEvent);

    setTimeout(() => {
      setDisableButton(false);
    }, 500);
  };

  const lastEventId = timeLineData[timeLineData?.length - 1].id;
  const handleGoToNextEvent = () => {
    if (currentEventId >= lastEventId) {
      handleEventChange(1);
    } else handleEventChange(currentEventId + 1);
  };

  const handleGoToPreviousEvent = () => {
    if (currentEventId === 1) {
      handleEventChange(lastEventId);
    } else handleEventChange(currentEventId - 1);
  };

  useGSAP(() => {
    gsap.from(".timeLineDesc", {
      x: "200px",
      duration: 0.5,
      ease: "power1.inOut",
    });
  }, [currentEventId]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleGoToNextEvent();
    }, 3500);

    return () => clearInterval(intervalId);
  }, [currentEventId, timeLineData]);

  return (
    <section className=" text-left w-[90%] flex flex-col justify-start items-start gap-5 overflow-x-hidden">
      <div className=" flex flex-col justify-start items-start gap-5">
        <h3 className=" text-4xl text-gray-700 font-bold">
          Time<span className=" text-[#009ADA]">Line</span>
        </h3>
        <h3 className=" text-4xl text-gray-700 font-bold">
          Over <span className=" text-[#009ADA]">75 Years</span>
        </h3>
      </div>
      <div
        style={{ backgroundImage: `url(${TimeLineBgImg})` }}
        className=" bg-contain bg-center bg-no-repeat w-full md:min-h-[80vh]
        hidden lg:flex flex-col justify-center items-center gap-5"
      >
        <div className=" w-[100%] flex justify-between items-center gap-5 text-white min-h-[150px]">
          <button
            disabled={disableButton ? true : false}
            onClick={handleGoToPreviousEvent}
            className=" bg-gray-300 hover:bg-sky-500 cursor-pointer p-2 rounded-sm"
          >
            <FaArrowLeftLong />
          </button>
          {timeLineData?.map((data, index) =>
            data.id === currentEventId ? (
              <div
                className=" w-[100px] h-[100px] rounded-full font-bold flex justify-center items-center
                 bg-sky-500 transition-all ease-in-out duration-500"
                key={data.id}
              >
                {data.year}
              </div>
            ) : (
              <div
                onClick={() => handleEventChange(data.id)}
                className={` ${
                  data.id === currentEventId + 1 ||
                  data.id === currentEventId - 1
                    ? "w-[50px] h-[50px] text-xs"
                    : "w-[30px] h-[30px] text-[8px]"
                }  rounded-full flex justify-center items-center
                 bg-gray-300 cursor-pointer transition-all ease-in-out duration-500`}
                key={data.id}
              >
                {data.year}
              </div>
            )
          )}
          <button
            disabled={disableButton ? true : false}
            onClick={handleGoToNextEvent}
            className=" bg-gray-300 hover:bg-sky-500 cursor-pointer p-2 rounded-sm"
          >
            <FaArrowRightLong />
          </button>
        </div>
        <div className=" timeLineDesc  w-full h-[120px] flex flex-col justify-center items-center gap-5">
          <h4 className=" md:w-[70%] lg:w-[50%] text-center text-2xl font-bold text-gray-500">
            {currentEvent?.heading}
          </h4>
          <p className=" md:w-[70%] lg:w-[50%] text-gray-700">
            {currentEvent?.desc}
          </p>
        </div>
        <img className=" md:w-[600px]" src={HomeTimeLineBottomImg} alt="Cars" />
      </div>
      <div className=" w-full lg:hidden flex flex-col justify-normal items-start gap-16 pl-2 pt-2 mt-5  border-l-2 border-l-sky-500">
        {timeLineData?.map((event, index) => (
          <div key={event.id} className=" w-full relative  ">
            <div className=" absolute -top-8 -left-[80px] w-[200px] h-[25px] flex justify-center items-center rounded-full bg-sky-500 z-10">
              <h5 className=" text-sm font-bold text-white">{event.year}</h5>
            </div>
            <div className=" w-full flex flex-col justify-start items-start gap-2">
              {/* <h5 className=" text-sm font-bold text-white px-2 py-1 rounded-md bg-sky-500">
                {event.year}
              </h5> */}
              <h4 className=" text-gray-700 text-xl font-bold">
                {event.heading}
              </h4>
              <p className=" text-gray-500">{event.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TimeLineSection;
