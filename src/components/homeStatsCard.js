import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function HomeStatsCard({ heading, subText }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className=" w-[250px] h-[200px] border-2 
    border-gray-200 rounded-lg text-white 
    flex flex-col justify-center items-center gap-10
    "
    >
      <h3 className=" font-semibold text-2xl">
        {inView && <CountUp start={0} end={heading} duration={2} suffix="+" />}
      </h3>

      <span>{subText}</span>
    </div>
  );
}

export default HomeStatsCard;
