import styled from "styled-components";
import celular from "../assets/img/celular.png";

export default function Section2() {
  return (
    <Wrapper>
      <div className="heading">O que você vai aprender na Live?</div>
      <div className="image">
        <img src={celular} alt="celular" />
      </div>
      <p className="section2-body">
        - Como ter diferenciais no seu negócio e superar a concorrência
      </p>
      <p className="section2-body">
        - Ações de marketing para atrair, fidelizar e vender mais
      </p>
      <p className="section2-body">
        - Posicionamento digital nas redes sociais: como transformar seguidores
        em clientes e lotar sua agenda
      </p>
      <p className="section2-body">
        - Estratégia para melhorar a experiência do seu cliente no pré vendas,
        atendimento e pós venda
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .image {
    width: 100px;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
