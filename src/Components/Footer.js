import styled from "styled-components";
import { RiWhatsappFill } from "react-icons/ri";

export default function Footer() {
  return (
    <Wrapper>
      <div>Prit, 2023</div>
      <div className="button">
        <RiWhatsappFill
          size={40}
          color="#25D366
"
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 10px 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .button {
    padding: 5px;
    border-radius: 50%;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);
    :hover {
      cursor: pointer;
      transform: scale(1.05);
    }
    :active {
      transform: scale(1.02);
    }
  }
`;
