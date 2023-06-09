import styled from "styled-components";
import celular from "../assets/img/celular.png";
import { styledButton } from "../Styles";
export default function Section2({ Scroll }) {
  return (
    <Wrapper>
      <h1>O que você vai aprender na Live?</h1>
      <div className="image">
        <img src={celular} alt="celular" />
      </div>
      <div className="body">
        <p>
          - <strong>Como ter diferenciais</strong> no seu negócio e{" "}
          <strong>superar a concorrência</strong>
        </p>
        <p>
          - Ações de marketing para{" "}
          <strong>atrair, fidelizar e vender mais</strong>
        </p>
        <p>
          - Posicionamento digital nas redes sociais:{" "}
          <strong>como transformar seguidores em clientes</strong> e lotar sua
          agenda
        </p>
        <p>
          - Estratégia para{" "}
          <strong>melhorar a experiência do seu cliente</strong> no pré vendas,
          atendimento e pós venda
        </p>
      </div>
      <Button onClick={() => Scroll()}>Quero participar da aula</Button>
    </Wrapper>
  );
}
const Button = styled(styledButton)`
  width: 70%;
  margin: 70px auto 0 auto;
  height: 50px;
`;

const Wrapper = styled.div`
  background: linear-gradient(to bottom, #3aadc4, #8744cb);
  height: 100vh;
  padding: 50px 0;
  color: white;
  display: flex;
  flex-direction: column;
  padding-left: 20%;
  padding-right: 50%;

  h1 {
    font-weight: 500;
    font-size: 30px;
  }
  .image {
    width: 100%;
    margin: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 70%;
      height: 100%;
    }
  }
  .body {
    font-size: 20px;
    margin-top: 40px;
    font-weight: 400;
    line-height: 25px;
    p {
      margin-bottom: 10px;
    }
  }
  @media (max-width: 1000px) {
    padding: 20px;
    text-align: center;
    margin: 0 auto;
    height: 120%;
  }
`;
