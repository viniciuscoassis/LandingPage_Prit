import { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Header from "./Components/Header";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";

function App() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [scroll]);

  const Scroll = () => {
    setScroll(!scroll);
  };
  return (
    <Wrapper>
      <Header>
        {" "}
        <Form id="desktopForm" />
      </Header>{" "}
      <div className="body">
        <Section1 Scroll={Scroll} />

        <Section2 Scroll={Scroll} />
        <Section3 />
      </div>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  @media (max-width: 600px) {
  } ;
`;

export default App;
