import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function SocialMediaContainer() {
  return (
    <div className={`flex justify-start items-start gap-5`}>
      <FaFacebook />
      <FaInstagram />
    </div>
  );
}

export default SocialMediaContainer;
