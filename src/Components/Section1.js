import styled from "styled-components";
import Form from "./Form";

export default function Section1() {
  return (
    <Wrapper>
      <h1>
        Muitos profissionais autônomos começam a realizar seus atendimentos e
        consultas, mas logo se frustram por quê não sabem:
      </h1>

      <div>
        <div> Como começar e atrair mais clientes Fidelizar clientes</div>
        <div> Fidelizar clientes</div>
        <div> Como se diferenciar e ser autoridade na sua cidade ou região</div>
        <div>As melhores práticas e quais estratégias aplicar no Instagram</div>
        <div> O que fazer para aumentar seu ticket médio e faturamento</div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  font-size: 18px;
  color: #050533;
  font-weight: 600;
  height: 80vh;
  background-color: #f1f1f1;
  padding: 10% 5%;
  h1 {
    font-size: 24px;
    width: 50%;
    line-height: 30px;
  }
`;
