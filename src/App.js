import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";

function App() {
  return (
    <>
      <Header />{" "}
      <div className="body">
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
      <Footer />
    </>
  );
}

export default App;
