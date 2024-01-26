import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Test from "./Test";
const App = () => {
  return (
    <div>
      <section>
        <Navbar />
        <a href="">Hero</a>
      </section>
      <section>parallax</section>
      <section>services</section>
      <section>parallax</section>
      <section>portfolio1</section>
      <section>portfolio2</section>
      <section>portfolio3</section>
      <section>contact</section>
      {/* <Test />
      <Test /> */}
    </div>
  );
};

export default App;
