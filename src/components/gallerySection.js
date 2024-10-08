import GalleryBgImg from "../assets/home/GalleryBgImg.png";

import GalleryImg1 from "../assets/home/GalleryImg1.png";
import GalleryImg2 from "../assets/home/GalleryImg2.png";
import GalleryImg3 from "../assets/home/GalleryImg3.png";
import GalleryImg4 from "../assets/home/GalleryImg4.png";
import GalleryImg5 from "../assets/home/GalleryImg5.png";
import GalleryImg6 from "../assets/home/GalleryImg6.png";
import GalleryImg7 from "../assets/home/GalleryImg7.png";
import GalleryImg8 from "../assets/home/GalleryImg8.png";

function GallerySection() {
  const galleryImages = [
    GalleryImg1,
    GalleryImg2,
    GalleryImg3,
    GalleryImg4,
    GalleryImg5,
    GalleryImg6,
    GalleryImg7,
    GalleryImg8,
  ];
  return (
    <div
      style={{ backgroundImage: `url(${GalleryBgImg})` }}
      className=" w-full flex justify-center items-center p-10 bg-cover bg-no-repeat bg-center"
    >
      <div className=" max-w-[90%] flex flex-col justify-start items-start gap-10">
        <h3 className=" text-4xl text-gray-700 font-bold">
          Gall<span className=" text-[#009ADA]">ery</span>
        </h3>
        <div className=" w-[100%] flex justify-start items-start gap-5 flex-wrap">
          {galleryImages.map((img, index) => (
            <img className="w-[250px]" key={index} src={img} alt="Gallery" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GallerySection;
