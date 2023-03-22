import { useState } from "react";
import styled from "styled-components";
import { styledButton } from "../Styles";

export default function Form() {
  const initialForm = { name: "", email: "", phone: "" };
  const [form, setForm] = useState(initialForm);

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <Wrapper onSubmit={submit}>
      <h1>Cadastre-se agora!</h1>
      <label>Nome para contato*</label>
      <input name="name" value={form.name} onChange={handleForm}></input>
      <label>E-mail*</label>
      <input name="email" value={form.email} onChange={handleForm}></input>
      <label>Número de telefone do WhatsApp (DDD) 99999-9999*</label>
      <input name="phone" value={form.phone} onChange={handleForm}></input>
      <Button type="submit">Me cadastrar e entrar no grupo!</Button>
    </Wrapper>
  );
}
const Button = styled(styledButton)``;

const Wrapper = styled.form`
  position: absolute;
  right: 20%;
  top: 20%;
  background-color: #39adc4;
  display: flex;
  flex-direction: column;
  width: 370px;
  height: 60%;
  padding: 20px;
  color: white;
  font-weight: 500;
  h1 {
    text-align: center;
    font-size: 24px;
    margin: 40px 0;
    font-weight: 600;
  }
  label {
    margin-bottom: 10px;
  }
  input {
    height: 50px;
    border-bottom: none;
    box-shadow: none;
    padding-left: 10px;
    margin-bottom: 40px;
    :focus {
      border: none;
      box-shadow: none;
    }
  }
  @media (max-width: 1000px) {
    position: initial;
    width: 100%;
    margin: 0 auto;
    height: 65%;
    padding: 0 10px;
  }
`;
