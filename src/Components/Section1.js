import styled from "styled-components";
import { MdVerified } from "react-icons/md";
import { styledButton } from "../Styles";

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
          <MdVerified color="#3E5CD2" size={20} />
          <p>
            Como começar e <strong>atrair mais clientes</strong>
          </p>
        </div>
        <div>
          {" "}
          <MdVerified color="#3E5CD2" size={20} />
          <p>
            <strong>Fidelizar clientes</strong>
          </p>
        </div>
        <div>
          {" "}
          <MdVerified color="#3E5CD2" size={30} />
          <p>
            <strong>Como se diferenciar</strong> e ser{" "}
            <strong>autoridade</strong> na sua cidade ou região
          </p>
        </div>
        <div>
          {" "}
          <MdVerified color="#3E5CD2" size={30} />
          <p>
            As melhores práticas e quais{" "}
            <strong>estratégias aplicar no Instagram</strong>
          </p>
        </div>
        <div>
          {" "}
          <MdVerified color="#3E5CD2" size={30} />{" "}
          <p>
            O que fazer para <strong>aumentar</strong> seu ticket médio e
            <strong> faturamento</strong>
          </p>
        </div>
      </div>

      <div className="bottom">
        E se você se identificou com algum desses pontos, essa aula é pra você!
      </div>
      <Button>Quero participar da aula</Button>
    </Wrapper>
  );
}

const Button = styled(styledButton)``;

const Wrapper = styled.div`
  font-size: 18px;
  color: #050533;
  font-weight: 600;
  height: 90vh;
  background-color: #f1f1f1;
  padding: 5% 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 50%;
  padding-left: 20%;

  h1 {
    font-size: 24px;
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
      align-items: center;
      :not(:last-child) {
        margin-bottom: 20px;
      }
      p {
        margin-left: 10px;
      }
    }
  }
  .bottom {
    color: #39adc4;
    font-size: 20px;
  }
  @media (max-width: 600px) {
    padding: 10px;
    height: 100vh;
    .body {
      margin-bottom: 70px;
    }
  }
`;
