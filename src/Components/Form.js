import styled from "styled-components";

export default function Form() {
  return (
    <Wrapper>
      <label>Nome para contato</label>
      <input></input>
      <button type="submit"></button>
    </Wrapper>
  );
}
const Wrapper = styled.form`
  position: absolute;
  right: 0;
  top: 20%;
  background-color: red;
`;
