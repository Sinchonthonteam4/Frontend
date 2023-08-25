import styled from "styled-components";
import emptycup from "../images/emptycup.png";

import { Container } from "../Containter";
import Logo from "../components/Logo";

export function TodayFinished() {
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
          <AlertText>
            오늘 하루 적정량보다
            <br /> 100 mg 더 섭취했어요.
            <br />
            <br /> 한아님, 조절이 필요해요!
          </AlertText>
          <EditBtn>
            <text>섭취량 수정하기</text>
          </EditBtn>
          <ShareBtn>
            <text>내 결과 공유하기</text>
          </ShareBtn>
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
const AlertText = styled.text`
  font-size: 16px;
  font-weight: 600;
`;

const EditBtn = styled.button`
  background-color: #ffc107;
  color: white;
  font-size: 16px;
  font-weight: 600;
  width: 140px;
  height: 38px;
  border: none;
  border-radius: 6px;
  margin: 53px 0 26px 0;
`;
const ShareBtn = styled.button`
  background-color: #ffc107;
  color: white;
  font-size: 16px;
  font-weight: 600;
  width: 140px;
  height: 38px;
  border: none;
  border-radius: 6px;
  margin-bottom: 8px;
`;
