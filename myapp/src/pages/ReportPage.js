import styled from "styled-components";
import Header from "../components/Header";
import Logo from "../components/Logo";
import { Container } from "../Containter";
import Goldcoin from "../images/Goldcoin.svg";

const ReportPage = () => {
  const weeklyData = {
    월: 100,
    화: 300,
    수: 200,
    목: 400,
    금: 650,
    토: 800,
    일: 350,
  };
  return (
    <Container>
      <Logo />
      <Header text="주간 결과 레포트" />
      <GraphContainer>
        <GraphTitle>OOO님의 카페인 주간 섭취량</GraphTitle>
        <GraphContent>
          <YAxis>
            {[0, 200, 400, 600, 800].map((label) => (
              <span key={label}>{label}</span>
            ))}
          </YAxis>
          <BarsArea>
            {Object.entries(weeklyData).map(([day, value]) => (
              <BarContainer key={day}>
                <BarBackground />
                <BarFill height={(value / 800) * 100} />
                <DayLabel>{day}</DayLabel>
              </BarContainer>
            ))}
          </BarsArea>
        </GraphContent>
      </GraphContainer>
      <Body>
        <Explain>
          OOO님이 일주일 간 섭취한 <br />
          카페인량은 총 XX mg 이며, <br />
          X요일에 가장 많이 섭취하셨네요!
          <br />
          <br /> 내 평균 섭취량은 XXmg으로, <br />
          일주일 권장 섭취량보다 XX mg 더/덜 마셨어요.
          <br />
          <br /> 또한 탈수 증상을 일으키므로 <br /> 물을 충분히 섭취하세요!
        </Explain>
        <ShareBtn>챌린지 공유하기</ShareBtn>
      </Body>
    </Container>
  );
};

const GraphContainer = styled.div`
  width: 350px;
  border-radius: 20px;
  border: 1px solid var(--stroke-color, #eff0f6);
  background: #fff;
`;

const GraphTitle = styled.div`
  display: flex;
  width: 168px;
  height: 15px;
  margin-top: 16px;
  margin-left: 11px;
  margin-bottom: 16px;
  flex-direction: column;
  justify-content: center;
  color: #000;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard Variable;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.154px;
`;

const GraphContent = styled.div`
  display: flex;
  padding: 20px 10px;
  border: 1px solid var(--stroke-color, #eff0f6);

  background: #fff;
  position: relative;
`;

const YAxis = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 5px;
  width: 46px;
`;

const BarContainer = styled.div`
  width: 12.044px;
  height: 112px;
  margin-left: 6px;
  margin-right: 13px;
  margin-bottom: 20px;
  position: relative;
`;
const BarsArea = styled.div`
  display: flex;
  gap: 10px;
`;
const BarBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--selected-tag, #f2f7ff);
  position: absolute;
  border-radius: 5px;
  top: 0;
  left: 0;
`;

const BarFill = styled.div`
  width: 100%;
  height: ${(props) => props.height}%;
  background: rgba(255, 193, 7, 0.8) 100%;
  border-radius: 5px;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const DayLabel = styled.div`
  position: absolute;
  top: 120px;
  left: -10px;
  display: flex;
  width: 31.752px;
  height: 6.882px;
  bottom: -50px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #838383;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard Variable;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Body = styled.div`
  width: 320px;
  margin: 24px 16px 32px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Explain = styled.div`
  text-align: center;
  margin-bottom: 42px;
  line-height: 28px;
`;

const ShareBtn = styled.div`
  background-color: #ffc107;
  cursor: pointer;
  color: white;
  font-size: 16px;
  font-weight: 600;
  width: 140px;
  height: 38px;
  border: none;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 12px;
`;

export default ReportPage;
