import ContactSectionLeftBgImg from "../assets/home/ContectSectionRightBgImg.png";
import { IoCallSharp } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";

import { content } from "../websiteContent/content";
import ContactForm from "./contactForm";
function ContactSection() {
  const handleEmail = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleCall = () => {
    window.location.href = `tel:${content.companyDetails.companyPhone}`;
  };

  const handleMapClick = () => {
    window.open(
      content.companyDetails.companyMapLink,
      "_blank",
      "noopener noreferrer"
    );
  };
  return (
    <div className=" w-[90%] h-auto mt-10 flex flex-col justify-center items-center gap-10 text-left">
      <h3 className=" text-4xl text-gray-700 font-bold">
        Contact&nbsp;
        <span className=" text-[#009ADA]">Info</span>
      </h3>
      <span className=" text-gray-500">
        Any question or remarks? Just write us a message!
      </span>
      <div
        className=" w-[100%] h-full flex flex-col justify-center items-center gap-10 
      md:flex-row md:justify-between md:items-center"
      >
        <div
          style={{ backgroundImage: `url(${ContactSectionLeftBgImg})` }}
          className=" w-[95%] md:w-[40%] md:min-h-[500px] bg-cover bg-center bg-no-repeat text-white 
          flex flex-col justify-start items-start p-10 gap-10 rounded-lg"
        >
          <div>
            <h4 className=" text-2xl font-semibold text-gray-100">
              Contact Information
            </h4>
            <span className=" text-gray-300">
              Say something to start a live chat!
            </span>
          </div>
          <div
            onClick={handleCall}
            className=" underline md:hover:underline md:no-underline cursor-pointer flex justify-center items-center gap-2 text-left"
          >
            <IoCallSharp />
            {content.companyDetails.companyPhone}
          </div>
          <div className=" flex justify-center items-center gap-2 text-left">
            <IoMail />
            <div className=" underline md:hover:underline md:no-underline cursor-pointer flex flex-col justify-start items-start">
              {content.companyDetails.companyEmails.map((email, index) => (
                <span onClick={() => handleEmail(email)} key={index}>
                  {email}
                </span>
              ))}
            </div>
          </div>
          <div
            onClick={handleMapClick}
            className="  underline md:hover:underline md:no-underline cursor-pointer flex justify-center items-center gap-2 text-left"
          >
            <IoLocation />
            {content.companyDetails.companyAddress}
          </div>
        </div>
        <div className=" w-[95%] md:w-[40%]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
