import Testimonialcontainer from "../../components/Testimonial/Testimonialcontainer";
import About from "../../components/about/About";
import HeroSection from "../../components/herosection/HeroSection";
import FeaturedProducts from "../../components/featuredproducts/FeaturedProducts";



const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <About />
      <Testimonialcontainer />

    </div>
  );
};

export default LandingPage;
