import HomeAboutImg1 from "../assets/home/HomeAboutImg1.png";
import HomeAboutImg2 from "../assets/home/HomeAboutImg2.png";
import HomeAboutIconImg from "../assets/home/HomeAboutIconImg.svg";

function HomeAboutSection() {
  return (
    <section
      className=" w-[95%] md:w-full md:px-20 flex flex-col justify-center items-center 
    md:flex-row md:justify-between md:items-start gap-10 text-left"
    >
      <div className=" w-full md:w-[45%] relative flex flex-col justify-center items-center gap-10 ">
        <img className=" w-full md:w-[350px]" src={HomeAboutImg1} alt="About" />
        <img
          className=" w-full md:absolute md:w-[200px] bottom-[-35%] right-[15%]"
          src={HomeAboutImg2}
          alt="About"
        />
      </div>
      <div className=" w-full md:w-[45%] flex flex-col justify-start items-start gap-5">
        <h4 className=" flex justify-start items-center gap-2 text-xl">
          <img src={HomeAboutIconImg} alt="About" />
          About <span className=" text-[#009ADA]">Us</span>
        </h4>
        <h2 className=" text-2xl font-bold">
          Speed Motors has been setting its footprint since 1947
        </h2>
        <p className=" text-gray-600">
          Speed deal as a franchise in automobiles. Dealership of the biggest
          automobiles like BMW, TVS Motor Company, Volvo Cars, Skoda Motorrad,
          Isuzu, Mitsubishi Motors, Mahindra & Mahindra, and Hindustan Motors.
          Started the dealership business with General Motors and Austin &
          Morris when introduced in the Indian Market.
        </p>
        <p className=" text-gray-600">
          We now have been one of the finest franchise companies. Since 2012 we
          have been constantly winning the tag of Best Overall performance in
          sales. Other tags that we won are best performance in BMW 7 series
          sales, highest overall manpower retention, the best performance in
          parts turnover, best overall performance in sales, and Best
          performance in corporate sales.
        </p>
        <hr className=" w-full h-[2px] bg-gray-300 rounded-lg " />
        <p className="  text-[#009ADA]  font-extrabold">
          “We have set up a top-class and unique-scale franchise of automobiles,
          successfully overcoming the challenges along the way.”
        </p>
      </div>
    </section>
  );
}

export default HomeAboutSection;
