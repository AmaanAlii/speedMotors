import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

import FooterBgImg from "../assets/home/FooterBgImg.jpg";
import MainLogo from "../assets/logos/MainLogoImg.png";
import { content } from "../websiteContent/content";

function FooterSection() {
  const handleSocialMediaClick = (link) => {
    window.open(link, "_blank", "noopener, noreferrer");
  };
  return (
    <footer
      style={{ backgroundImage: `url(${FooterBgImg})` }}
      className=" w-full h-auto py-10 md:py-0 md:h-[300px] flex flex-col 
      justify-center items-center 
    gap-5 bg-center bg-cover bg-no-repeat text-white"
    >
      <img src={MainLogo} alt="Logo" />
      <div className=" flex flex-col gap-5">
        Social Media
        <div className=" flex justify-center items-center gap-5 text-left text-3xl">
          <FaFacebookSquare
            className=" cursor-pointer hover:text-sky-500 "
            onClick={() =>
              handleSocialMediaClick(content?.companyDetails?.companyFb)
            }
          />
          <FaSquareInstagram
            className=" cursor-pointer hover:text-sky-500"
            onClick={() =>
              handleSocialMediaClick(content?.companyDetails?.companyInsta)
            }
          />
          <FaLinkedin
            className=" cursor-pointer hover:text-sky-500"
            onClick={() =>
              handleSocialMediaClick(content?.companyDetails?.companyLinkedIn)
            }
          />
        </div>
      </div>
      <div>
        © 2024, All rights reserved
        <div>
          Developed by:{" "}
          <a
            href="https://branding360.ae/"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-sky-500 hover:text-sky-600"
          >
            Branding 360
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
