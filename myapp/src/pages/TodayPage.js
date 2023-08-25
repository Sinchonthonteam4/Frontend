import styled from "styled-components";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function TodayPage() {
  return (
    <Wrapper>
      <Title>오늘 하루 섭취한 카페인</Title>
      <Body>
        <BsChevronLeft
          style={{
            width: "24px",
            height: "24px",
            position: "fixed",
            left: "240px",
            top: "310px",
          }}
        />
        <TemporaryBox></TemporaryBox>
        <BsChevronRight
          style={{
            width: "24px",
            height: "24px",
            position: "fixed",
            right: "240px",
            top: "310px",
          }}
        />
      </Body>
      <RecordBtn>
        <text>섭취량 기록하기</text>
      </RecordBtn>
    </Wrapper>
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
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TemporaryBox = styled.div`
  background-color: #d9d9d9;
  width: 120px;
  height: 240px;
  margin: 60px 0 70px 0;
`;
const RecordBtn = styled.button`
  background-color: #ffc107;
  color: white;
  font-size: 16px;
  font-weight: 600;
  width: 140px;
  height: 38px;
  border: none;
  border-radius: 6px;
`;
