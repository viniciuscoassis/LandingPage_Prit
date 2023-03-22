import styled from "styled-components";

export default function Section3() {
  return (
    <Wrapper>
      <div className="heading"> BÔNUS AO FINAL DA AULA:</div>
      <ul className="footer-body">
        <li className="1">
          1. Lista de ferramentas úteis para criação de conteúdo
        </li>
        <li className="2">
          2. Documento com mais de 30 ideias para você postar no seu Instagram
        </li>
        <li className="3">
          3. Passo a passo de como criar um conteúdo no Canva
        </li>
      </ul>
    </Wrapper>
  );
}
const Wrapper = styled.div``;
