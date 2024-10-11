import FooterBgImg from "../assets/home/FooterBgImg.jpg";
import MainLogo from "../assets/logos/MainLogoImg.png";
function FooterSection() {
  return (
    <footer
      style={{ backgroundImage: `url(${FooterBgImg})` }}
      className=" w-full h-auto py-10 md:py-0 md:h-[300px] flex flex-col 
      justify-center items-center 
    gap-5 bg-center bg-cover bg-no-repeat text-white"
    >
      <img src={MainLogo} alt="Logo" />
      <div>Social Media</div>
      <span>
        © 2022. All rights reserved Developed by:{" "}
        <a
          href="https://branding360.ae/"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-sky-500 hover:text-sky-600"
        >
          Branding 360
        </a>
      </span>
    </footer>
  );
}

export default FooterSection;
