import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Divider from "../components/Divider";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};
export default Home;
