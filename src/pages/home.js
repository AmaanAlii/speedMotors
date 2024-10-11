import AwardsSection from "../components/awardsSection";
import BrandsSection from "../components/brandsSection";
import BrandsWeWorkWith from "../components/brandsWeWorkWithSections";
import ContactSection from "../components/contactSection";
import FooterSection from "../components/footerSection";
import GallerySection from "../components/gallerySection";
import HomeAboutSection from "../components/homeAboutSection";
import HomeBanner from "../components/homeBanner";
import HomeIntroCarousel from "../components/homeIntroCarousel";
import HomeStatsSection from "../components/homeStatsSection";
import OurDirectorsSection from "../components/ourDirectorsSection";
import TestimonialsSection from "../components/testimonialsSection";
import TimeLineSection from "../components/timeLineSection";

function Home({ galleryRef }) {
  return (
    <div className=" flex flex-col justify-center items-center gap-10 my-10">
      <HomeBanner />
      <HomeAboutSection />
      <HomeIntroCarousel />
      <HomeStatsSection />
      <TimeLineSection />
      <OurDirectorsSection />
      <BrandsSection />
      <BrandsWeWorkWith />
      <AwardsSection />
      <GallerySection galleryRef={galleryRef} />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}

export default Home;
