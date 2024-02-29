import Testimonialcontainer from "../../components/Testimonial/Testimonialcontainer";
import About from "../../components/about/About";
import HeroSection from "../../components/herosection/HeroSection";
import FeaturedProducts from "../../components/featuredproducts/FeaturedProducts";
import NavBar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";


const LandingPage = () => {
  return (
    <>
     <NavBar/>
      <HeroSection />
      <FeaturedProducts />
      <About />
      <Testimonialcontainer />
     <Footer/>
    </>
  );
};

export default LandingPage;

// all componentes should start with capital letter
// if your file has html and js you can name it .jsx
