import AwardsImg1 from "../assets/home/AwardsImg1.png";
import AwardsImg2 from "../assets/home/AwardsImg2.png";
import AwardsMainImg from "../assets/home/AwardsMaimImg.png";

import AwardsSectionMobileImg from "../assets/home/AwardsSectionMobileImg.png";

function AwardsSection() {
  return (
    <div className=" w-[90%] flex flex-col justify-center items-center gap-10 text-left">
      <h3 className=" text-4xl text-gray-700 font-bold">
        <span className=" text-[#009ADA]">Awards &</span>&nbsp; Achievements
      </h3>
      <div className=" w-full flex justify-center md:justify-between items-center gap-5 flex-wrap">
        <img className=" min-w-[300px] w-[40%]" src={AwardsImg1} alt="Awards" />
        <img className=" min-w-[300px] w-[40%]" src={AwardsImg2} alt="Awards" />
      </div>
      <p className=" text-gray-500">
        We have set up a top-class and unique-scale franchise of automobiles,
        successfully overcoming the challenges along the way. We now have been
        one of the finest franchise companies. Since 2012 we have been
        constantly winning the tag of Best Overall performance in sales. Other
        tags that we won are best performance in BMW 7 series sales, highest
        overall manpower retention, the best performance in parts turnover, best
        overall performance in sales, and Best performance in corporate sales.
      </p>
      <img
        className=" hidden md:flex min-w-[300px] w-full"
        src={AwardsMainImg}
        alt="History"
      />
      <img
        className=" flex md:hidden w-full"
        src={AwardsSectionMobileImg}
        alt="History"
      />
    </div>
  );
}

export default AwardsSection;
