import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Test from "./test/Test";
const App = () => {
  return (
    <div>
      <section id="HomePage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>services</section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <section>portfolio1</section>
      <section>portfolio2</section>
      <section>portfolio3</section>
      <section id="Contact">contact</section>
      {/* <Test /> */}
      {/* <Test /> */}
    </div>
  );
};

export default App;
