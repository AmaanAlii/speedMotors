import { useState } from "react";
import TimeLineBgImg from "../assets/home/TimeLineBgImg.png";
import { content } from "../websiteContent/content";
function TimeLineSection() {
  const timeLineData = content.timeLineContent;
  const [currentTime, setCurrentTime] = useState(timeLineData[0].year);

  return (
    <section className=" text-left w-[90%] flex flex-col justify-start items-start gap-10">
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
        className=" bg-contain bg-center bg-no-repeat w-full md:min-h-[80vh]"
      >
        <div></div>
      </div>
    </section>
  );
}

export default TimeLineSection;
