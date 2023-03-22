import styled from "styled-components";
import { MdVerified } from "react-icons/md";

export default function Section1() {
  return (
    <Wrapper>
      <h1>
        Muitos profissionais autônomos começam a realizar seus atendimentos e
        consultas, mas logo se frustram por quê não sabem:
      </h1>

      <div className="body">
        <div>
          {" "}
          <MdVerified color="#3E5CD2" />
          <p>
            Como começar e <strong>atrair mais clientes</strong>
          </p>
        </div>
        <div>
          {" "}
          <MdVerified color="#3E5CD2" />
          <p>
            <strong>Fidelizar clientes</strong>
          </p>
        </div>
        <div>
          {" "}
          <MdVerified color="#3E5CD2" />
          <p>
            <strong>Como se diferenciar</strong> e ser{" "}
            <strong>autoridade</strong> na sua cidade ou região
          </p>
        </div>
        <div>
          {" "}
          <MdVerified color="#3E5CD2" />
          <p>
            As melhores práticas e quais{" "}
            <strong>estratégias aplicar no Instagram</strong>
          </p>
        </div>
        <div>
          {" "}
          <MdVerified color="#3E5CD2" />{" "}
          <p>
            O que fazer para <strong>aumentar</strong> seu ticket médio e
            <strong> faturamento</strong>
          </p>
        </div>
      </div>

      <div className="bottom">
        E se você se identificou com algum desses pontos, essa aula é pra você!
      </div>
      <button>Quero participar da aula</button>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  font-size: 18px;
  padding-right: 100px;
  color: #050533;
  font-weight: 600;
  height: 80vh;
  background-color: #f1f1f1;
  padding: 10% 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  button {
    height: 50px;
    border: none;
    background-color: #d37941;
    font-size: 20px;
    color: white;
    font-weight: 500;
  }
  h1 {
    font-size: 24px;
    width: 50%;
    line-height: 30px;
  }
  .body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 30%;
    font-weight: 400;
    font-size: 20px;
    div {
      display: flex;
      text-align: flex-start;
      p {
        margin-left: 10px;
      }
    }
  }
  .bottom {
    color: #39adc4;
    font-size: 20px;
  }
`;
