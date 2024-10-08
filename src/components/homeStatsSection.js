import HomeStatsBgImg from "../assets/home/HomeStatsBgImg.jpg";
import { content } from "../websiteContent/content";
import HomeStatsCard from "./homeStatsCard";
function HomeStatsSection() {
  return (
    <div
      style={{ backgroundImage: `url(${HomeStatsBgImg})` }}
      className=" bg-cover bg-no-repeat bg-center 
      w-full h-auto md:min-h-[30vh] flex justify-center items-center flex-wrap gap-10
       px-5 py-10 "
    >
      {content?.statsContent?.map((data, index) => (
        <HomeStatsCard
          key={index}
          heading={data.heading}
          subText={data.subText}
        />
      ))}
    </div>
  );
}

export default HomeStatsSection;
