import { Container } from "../Containter";
import Logo from "../components/Logo";
import styled from "styled-components";

import award from "../images/award.png";
import sogang from "../images/Sogang.png";
import yonsei from "../images/Yonsei.png";
import ewha from "../images/Ewha.png";
import hongik from "../images/Hongik.png";
import coin from "../images/coin.svg";

const ChallengePage = () => {
  return (
    <Container>
      <Logo />
      <Wrapper>
        <Title>챌린지 참여하기</Title>
        <Banner>
          <Text>
            <p
              style={{
                color: "#242424",
                fontFamily: "Roboto",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "28px",
                zIndex: "2",
              }}
            >
              부스트 업!
            </p>
            <p
              style={{
                color: "#4A4A4A",
                fontFamily: "Roboto",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "16px",
                letterSpacing: "-0.1px",
                zIndex: "2",
              }}
            >
              기말고사 기간 동안 불태워보세요 🔥
            </p>
            <p
              style={{
                color: "#FF8E1D",
                fontFamily: "Roboto",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "14px",
                zIndex: "2",
              }}
            >
              부스트업 기간은 XX일 후에 종료됩니다.
            </p>
          </Text>
          <img
            src={award}
            style={{ zIndex: "1", width: "50px", height: "50px" }}
          />
        </Banner>
        <Univ>
          <p>TOP 4 대학교</p>
          <FirstBox>
            <img src={sogang} />
            <img src={coin} />
          </FirstBox>
          <SecondBox>
            <img src={yonsei} />
            <img src={coin} />
          </SecondBox>
          <ThirdBox>
            <img src={ewha} />
            <img src={coin} />
          </ThirdBox>
          <FourthBox>
            <img src={hongik} />
            <img src={coin} />
          </FourthBox>
        </Univ>
        <Explain>
          시험기간 힘내세요! <br /> 하지만 과도한 카페인 섭취는 두통, <br />{" "}
          가슴 두근거림, 수면장애를 동반하는 등 <br /> 건강에 해로울 수
          있습니다.
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
  text-align: center;
  font-family: Pretendard Variable;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 100% */
  margin-top: 152px;
`;

const Banner = styled.div`
  width: 277.95px;
  height: 116.56px;
  flex-shrink: 0;
  border-radius: var(--percent, 10px);
  background: linear-gradient(90deg, #ffd949 0%, #ffec7b 100%);
  margin-top: 48px;
  display: flex;
  flex-direction: row;
`;

const Text = styled.div``;

const Univ = styled.div``;
const FirstBox = styled.div``;
const SecondBox = styled.div``;
const ThirdBox = styled.div``;
const FourthBox = styled.div``;
const Explain = styled.div``;
const ShareBtn = styled.div``;
