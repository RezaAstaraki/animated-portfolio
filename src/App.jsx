import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import TestParallax from "./test/TestParallax";
import Test from "./test/Test";
import Portfolio from "./components/portfolio/Portfolio";
const App = () => {
  return (
    <div>
      <section id="HomePage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
        {/* <TestParallax type={"services"} /> */}
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
        {/* <TestParallax type={"portfolio"} /> */}
      </section>
      <Portfolio />
      <section id="Contact">contact</section>
      {/* <Test /> */}
      {/* <Test /> */}
    </div>
  );
};

export default App;
