import TestimonialsBgImg from "../assets/home/TestimonialsBgImg.png";
import { content } from "../websiteContent/content";
import TestimonialStarsImg from "../assets/home/TestimonialStarsImg.png";
function TestimonialsSection() {
  return (
    <div
      style={{ backgroundImage: `url(${TestimonialsBgImg})` }}
      className=" w-full flex justify-center items-center px-1 md:px-10 py-16 bg-cover bg-no-repeat bg-center"
    >
      <div className=" max-w-[90%] flex justify-center items-center flex-wrap gap-10">
        {content?.testimonialsContent?.map((data, index) => (
          <div
            key={index}
            className=" w-[300px] h-[300px] bg-white rounded-lg p-5 flex flex-col justify-between items-center"
          >
            <div className=" w-full flex flex-col justify-center items-center gap-5">
              <img src={TestimonialStarsImg} alt="Stars" />
              <p className=" text-left">{data.desc}</p>
            </div>
            <div className=" flex justify-start items-center self-start gap-2 w-fit">
              <img className=" w-8" src={data.clientImg} alt="Client" />
              <div className=" flex flex-col justify-start items-start leading-4 text-xs ">
                <span className=" font-bold text-black">{data.clientName}</span>
                <span className=" text-gray-600">{data.clientDesignation}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialsSection;
