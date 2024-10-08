function HomeStatsCard({ heading, subText }) {
  return (
    <div
      className=" w-[250px] h-[200px] border-2 
    border-gray-200 rounded-lg text-white 
    flex flex-col justify-center items-center gap-10
    "
    >
      <h3 className=" font-semibold text-2xl">{heading}</h3>
      <span>{subText}</span>
    </div>
  );
}

export default HomeStatsCard;
