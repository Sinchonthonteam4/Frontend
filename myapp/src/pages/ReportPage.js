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
  const LINK_TO_COPY = "www.naver.com"; // 배포한 링크 수정 필요.
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("링크가 클립보드에 복사되었어요! 친구에게 공유해보세요!");
    } catch (err) {
      alert("링크를 복사하는 데 실패했습니다.", err);
    }
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

      <TextContainer>
        OOO님이 일주일 간 섭취한 카페인량은 총 XX mg 이며, X요일에 가장 많이
        섭취하셨네요! 내 평균 섭취량은 XXmg으로, 일주일 권장 섭취량보다 XX mg
        더/덜 마셨어요. 레포트 결과가 마음에 드신다면, 인스타그램에 내 결과를
        공유해 더 많은 친구들과 비교해 보세요!
      </TextContainer>
      <Styledbutton onClick={() => copyToClipboard(LINK_TO_COPY)}>
        내 결과 공유하기
      </Styledbutton>

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

const TextContainer = styled.div`
  width: 307px;
  color: #313131;
  margin-top: 20px;
  margin-left: 26px;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px; /* 162.5% */
`;
const Styledbutton = styled.button`
  display: inline-flex;
  cursor: pointer;
  padding: 10px 16px;
  align-items: flex-start;
  gap: 8px;
  margin-top: 18px;
  margin-left: 130px;
  border-radius: 6px;
  background: #ffc107;
  color: var(--default-white, #fff);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 112.5% */
  border: none;
`;

export default ReportPage;
