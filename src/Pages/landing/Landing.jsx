import Testimonialcontainer from "../../components/Testimonial/Testimonialcontainer";
import About from "../../components/about/About";
import HeroSection from "../../components/herosection/HeroSection";
import FeaturedProducts from "../../components/featuredproducts/FeaturedProducts";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Signup from "../signup/Signup";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <About />
      <Testimonialcontainer />
      <Signup />
      <Footer />
    </div>
  );
};

export default LandingPage;
