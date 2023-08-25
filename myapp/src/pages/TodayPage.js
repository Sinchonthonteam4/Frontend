import styled from "styled-components";
import emptycup from "../images/emptycup.png";
import { useNavigate } from "react-router-dom";

import { Container } from "../Containter";
import Logo from "../components/Logo";

export default function TodayPage() {
  const navigate = useNavigate();
  const recordHandler = () => {
    navigate("/record");
  };

  return (
    <Container>
      <Logo />
      <Wrapper>
        <Title>오늘 하루 섭취한 카페인</Title>
        <Body>
          <img
            src={emptycup}
            alt="emptycup"
            style={{ margin: "52px 80px 46px 80px" }}
          />
        </Body>
        <Bottom>
          <RecordBtn onClick={recordHandler}>
            <text>섭취량 기록하기</text>
          </RecordBtn>
        </Bottom>
      </Wrapper>
    </Container>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.text`
  font-size: 32px;
  font-weight: 700;
  margin-top: 42px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const RecordBtn = styled.button`
  background-color: #ffc107;
  cursor: pointer;
  color: white;
  font-size: 16px;
  font-weight: 600;
  width: 140px;
  height: 38px;
  border: none;
  border-radius: 6px;
`;
