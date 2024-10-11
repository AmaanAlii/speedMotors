function BrandDetailsCard({
  logoImg,
  desc,
  contactNo,
  imagesShowroom,
  mapLink,
}) {
  const handleViewMap = () => {
    window.open(mapLink, "_blank", "noopener noreferrer");
  };

  const handleCall = () => {
    window.location.href = `tel:${contactNo}`;
  };
  return (
    <div
      className="w-[95%] md:w-[90%] flex flex-col md:flex-row justify-center md:justify-between items-center
     gap-10 flex-wrap border-b-2 border-gray-300 pb-10 "
    >
      <div
        className=" w-full md:w-[20%] flex flex-col justify-center items-center 
      md:justify-start md:items-start gap-5"
      >
        <img className=" w-[200px] md:w-[100%]" src={logoImg} alt="Logo" />
        <div className=" w-[100%] flex flex-wrap md:flex-nowrap md:justify-between md:items-center gap-5">
          {imagesShowroom?.map((img, index) => (
            <img
              key={index}
              className=" w-full md:w-[300px]"
              src={img}
              alt="Showroom"
            />
          ))}
        </div>
      </div>
      <div className=" md:w-[50%] flex flex-col justify-start items-start gap-5 text-left">
        <p>{desc}</p>
        <div className=" w-[100%] flex flex-col justify-start items-start gap-5">
          <span>
            Have any questions? <br></br>
            Contact us!
          </span>
          <div className=" w-[100%] flex justify-between items-center gap-5 flex-wrap ">
            <h4
              className=" hover:text-blue-500 cursor-pointer"
              onClick={handleCall}
            >
              {contactNo}
            </h4>
            <button
              className=" px-2 py-1 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold rounded-lg"
              onClick={handleViewMap}
            >
              View On Map
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandDetailsCard;
