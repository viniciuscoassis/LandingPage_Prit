import styled from "styled-components";
import background from "../assets/img/background.png";
import Form from "./Form";

export default function Header({ children }) {
  return (
    <Wrapper>
      <h1>
        Como <strong>lotar a sua agenda</strong> com o{" "}
        <strong>Marketing Digital</strong>
      </h1>
      <p>Uma aula com o passo a passo para se destacar e ter mais clientes!</p>
      <p>
        <strong>Quarta, 5 de abril de 2023 às 20h</strong>
      </p>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-image: url(${background});
  color: white;
  height: 61.5vh;
  object-fit: scale-down;
  display: flex;
  flex-direction: column;
  padding: 10% 0;
  justify-content: space-around;
  background-size: cover;
  background-position: center;
  padding-right: 41%;
  padding-left: 20%;

  h1 {
    font-size: 37px;
  }
  p {
    font-size: 22px;
  }

  @media (max-width: 1000px) {
    padding: 10px 20px;
    height: 120vh;

    h1 {
      font-size: 30px;
    }
  }
`;
