import BrandLogoImg1 from "../assets/brands/BrandLogo1.png";
import BrandLogoImg2 from "../assets/brands/BrandLogo2.png";
import BrandLogoImg3 from "../assets/brands/BrandLogo3.png";
import BrandLogoImg4 from "../assets/brands/BrandLogo4.png";
import BrandLogoImg5 from "../assets/brands/BrandLogo5.png";
import BrandLogoImg6 from "../assets/brands/BrandLogo6.png";
import BrandLogoImg7 from "../assets/brands/BrandLogo7.png";
import BrandLogoImg8 from "../assets/brands/BrandLogo8.png";

function BrandsSection() {
  const brandLogos = [
    BrandLogoImg1,
    BrandLogoImg2,
    BrandLogoImg3,
    BrandLogoImg4,
    BrandLogoImg5,
    BrandLogoImg6,
    BrandLogoImg7,
    BrandLogoImg8,
  ];
  return (
    <div className=" w-full flex flex-col justify-center items-center gap-10 mt-10 mb-16">
      <div className=" relative w-full h-[2px] bg-gray-200">
        <span className=" absolute -top-2 left-[30%] md:-top-2 md:left-[42vw] px-5 bg-white ">
          Brands With Speed
        </span>
      </div>
      <div className=" w-[90%] flex justify-between items-center flex-wrap gap-5">
        {brandLogos.map((img, index) => (
          <img className=" max-w-[100px]" key={index} src={img} alt="Brand" />
        ))}
      </div>
    </div>
  );
}

export default BrandsSection;
