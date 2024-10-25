import DirectorImg1 from "../assets/home/DirectorImg1.png";
import DirectorImg2 from "../assets/home/DirectorImg2.png";
import DirectorImg3 from "../assets/home/DirectorImg3.png";
import DirectorImg4 from "../assets/home/DirectorImg4.png";

function OurDirectorsSection() {
  const directImages = [
    { img: DirectorImg2, name: "Sandeep Narain" },
    { img: DirectorImg1, name: "Vidit Narain" },
    { img: DirectorImg3, name: "Divij Narain" },
    { img: DirectorImg4, name: "Rajesh Narain" },
  ];

  return (
    <div className=" w-[90%] flex flex-col justify-center items-center md:items-start gap-10">
      <h3 className=" font-bold text-2xl">
        Our&nbsp;<span className=" text-[#019ADA]">Directors</span>
      </h3>
      <div className="w-full flex justify-center md:justify-between items-center gap-5 flex-wrap">
        {directImages.map((director, index) => (
          <div key={index} className=" relative w-fit group">
            <div
              className=" group-hover:flex hidden transition-all ease-in-out duration-500 
              absolute w-full h-full cursor-pointer 
                justify-center items-center rounded-lg "
            >
              <div className=" w-full h-full bg-sky-300 mix-blend-multiply rounded-lg"></div>
              <span className=" absolute font-bold text-3xl text-white">
                {director?.name}
              </span>
            </div>
            <img
              className=" w-[280px] rounded-lg"
              src={director?.img}
              alt="Director"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurDirectorsSection;
