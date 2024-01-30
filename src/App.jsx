import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Test from "./Test";
const App = () => {
  return (
    <div>
      <section id="HomePage">
        <Navbar />
        <a href="">Hero</a>
      </section>
      <section id="Services">parallax</section>
      <section>services</section>
      <section id="Portfolio">parallax</section>
      <section>portfolio1</section>
      <section>portfolio2</section>
      <section>portfolio3</section>
      <section id="Contact">contact</section>
      {/* <Test />
      <Test /> */}
    </div>
  );
};

export default App;
