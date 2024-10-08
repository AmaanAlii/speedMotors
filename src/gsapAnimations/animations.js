import gsap from "gsap";

export const toggleIconAnimation = (
  burgerIconRef,
  closeIconRef,
  isMenuOpen
) => {
  gsap.to(".burgerIcon", {
    rotation: isMenuOpen ? 180 : 0,
    // opacity: isMenuOpen ? 0 : 1,
    duration: 0.3,
    ease: "power2.inOut",
  });
  gsap.to(".closeIcon", {
    rotation: isMenuOpen ? 180 : -90,
    // opacity: isMenuOpen ? 1 : 0,
    duration: 0.3,
    ease: "power2.inOut",
  });
};

export const toggleSideMenuAnimation = (sideMenuRef, isMenuOpen) => {
  gsap.to(sideMenuRef.current, {
    x: isMenuOpen ? 500 : 0,
    duration: 0.5,
    ease: "power2.inOut",
  });
};

// Home Banner Animations

// Function for entry animations
export const homeBannerEntry = (homeBannerRef) => {
  const tl = gsap.timeline();

  // Slide up text
  tl.from(homeBannerRef.current.querySelectorAll("h2, h3"), {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.2,
  });

  // Slide up logos
  tl.from(
    homeBannerRef.current.querySelectorAll("img"),
    {
      y: 50,
      opacity: 0,
      delay: 0.8,
      duration: 1,
      stagger: 0.1,
    },
    "-=0.5"
  ); // Start this animation slightly before the text finishes
};

// Function for background hover animation
export const homeBannerBgHover = (homeBannerRef) => {
  gsap.to(homeBannerRef.current, {
    backgroundPosition: "center 150px",
    duration: 2,
    delay: 0.2,
    ease: "power1.inOut",
    repeat: 0, // Keep it looping
    yoyo: true, // Reverses animation
  });
};
