import { Container } from "../Containter";
import Logo from "../components/Logo";
import styled from "styled-components";

import boost from "../images/boost.png";
import sogangUniv from "../images/sogangUniv.png";
import yonseiUniv from "../images/yonseiUniv.png";
import ewhaUniv from "../images/ewhaUniv.png";
import hongikUniv from "../images/hongikUniv.png";

const ChallengePage = () => {
  return (
    <Container>
      <Logo />
      <Wrapper>
        <Title>챌린지 참여하기</Title>
        <Banner>
          <img src={boost} alt="boost" />
          <BannerText>
            <p
              style={{
                width: "100%",
                color: "#242424",
                fontFamily: "Roboto",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "700",
                margin: "12px 0",
              }}
            >
              부스트 업!
            </p>
            <p
              style={{
                width: "100%",
                color: "#4A4A4A",
                fontFamily: "Roboto",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                margin: 0,
              }}
            >
              기말고사 기간 동안 불태워보세요 🔥
            </p>
            <p
              style={{
                width: "100%",
                color: "#FF8E1D",
                fontFamily: "Roboto",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                marginTop: "8px",
              }}
            >
              부스트업 기간은 XX일 후에 종료됩니다.
            </p>
          </BannerText>
        </Banner>
        <Univ>
          <p style={{ fontSize: "16px", fontWeight: 600 }}>TOP 4 대학교</p>
          <img src={sogangUniv} alt="univ" />
          <img src={yonseiUniv} alt="univ" />
          <img src={ewhaUniv} alt="univ" />
          <img src={hongikUniv} alt="univ" />
        </Univ>
        <Explain>
          시험기간 힘내세요! <br />
          <br /> 하지만 과도한 카페인 섭취는 두통, <br /> 가슴 두근거림,
          수면장애를 동반하는 등 <br /> 건강에 해로울 수 있습니다.
          <br />
          <br /> 또한 탈수 증상을 일으키므로 <br /> 물을 충분히 섭취하세요!
        </Explain>
        <ShareBtn>챌린지 공유하기</ShareBtn>
      </Wrapper>
    </Container>
  );
};

export default ChallengePage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  color: #000;
  font-family: Pretendard Variable;
  font-size: 32px;
  font-style: normal;
  font-weight: bold;
  line-height: 32px; /* 100% */
  margin: 48px 0;
`;

const Banner = styled.div`
  width: 280px;
  height: 120px;
  display: flex;
  flex-direction: row;
  background-image: url(/src/images/boost.png);
  background-size: cover;
  position: relative;
  background-repeat: no-repeat;
`;

const BannerText = styled.div`
  position: absolute;
  top: 50%;
  left: 55%;
  width: 100%;
  flex-direction: row;
  transform: translate(-50%, -50%);
`;

const Univ = styled.div`
  width: 320px;
  margin: 24px 16px 32px 16px;
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
`;
