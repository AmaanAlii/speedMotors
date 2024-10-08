import { content } from "../websiteContent/content";
import BrandDetailsCard from "./brandDetailsCard";

function BrandsWeWorkWith() {
  return (
    <div className=" w-[90%] flex flex-col justify-center items-center gap-16">
      <h3 className=" text-4xl text-gray-700 font-bold">
        <span className=" text-[#009ADA]">Brands</span>&nbsp; We Are Working
        With
      </h3>

      <div className=" flex flex-col justify-center items-center gap-16 md:gap-10">
        {content?.brandsDetails?.map((data, index) => (
          <BrandDetailsCard
            key={index}
            logoImg={data?.logoImg}
            imagesShowroom={data?.imagesShowroom}
            desc={data?.desc}
            contactNo={data?.contact}
            mapLink={data?.mapLink}
          />
        ))}
      </div>
    </div>
  );
}

export default BrandsWeWorkWith;
