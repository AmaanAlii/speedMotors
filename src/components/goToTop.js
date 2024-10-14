import GoToTopImg from "../assets/home/GoToTopImg.png";
function GoToTop() {
  const imageClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className=" absolute top-10 right-10">
      <img src={GoToTopImg} alt="Car" />
    </div>
  );
}
