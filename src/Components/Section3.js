import styled from "styled-components";
import { AiOutlineGift } from "react-icons/ai";

export default function Section3() {
  return (
    <Wrapper>
      <div className="header">
        {" "}
        <AiOutlineGift size={30} />
        <h1> BÔNUS AO FINAL DA AULA:</h1>
      </div>

      <ul className="footer-body">
        <li className="1">
          <strong>1.</strong> Lista de ferramentas úteis para criação de
          conteúdo
        </li>
        <li className="2">
          <strong>2.</strong> Documento com mais de 30 ideias para você postar
          no seu Instagram
        </li>
        <li className="3">
          <strong>3.</strong> Passo a passo de como criar um conteúdo no Canva
        </li>
      </ul>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: #201d4d;
  color: white;
  font-size: 18px;
  padding: 30px 20px;
  height: 25vh;
  display: flex;
  flex-direction: column;
  .header {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
  }
  h1 {
    font-size: 22px;
    font-weight: 600;
    margin-left: 10px;
  }
  ul {
    li {
      :not(:last-child) {
        margin-bottom: 30px;
      }
    }
  }
  @media (max-width: 1000px) {
    height: 120%;
  }
`;
