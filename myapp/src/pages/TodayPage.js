import styled from "styled-components";
//import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import emptycup from "../images/emptycup.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { Container } from "../Containter";
import Logo from "../components/Logo";
import axios from "axios";

export default function TodayPage({ isOpen }) {
  //const navigate = useNavigate();

  const [isFill, setIsFill] = useState(false);
  const [totalCaffeine, setTotalCaffeine] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("login-token")}`,
    };

    axios
      .get(`${BASE_URL}/your_endpoint_here`, { headers })
      .then((response) => {
        const data = response.data;
        if (data && data.length > 0 && data[0].total > 0) {
          setIsFill(true);
          setTotalCaffeine(data[0].total);
        }
      })
      .catch((error) => {
        console.error("Error fetching caffeine data:", error);
      });
  }, []);
  const recordHandler = () => {
    setIsFill(true);
    navigate("/record");
  };

  // const navigateToPrev = () => {
  //   navigate('/prevPage')
  // }
  const BASE_URL = `https://port-0-coffee-master-lyc2mllqwjup5.sel3.cloudtype.app`;

  const handleSubmit = () => {
    const data = {};
    if (localStorage.getItem("login-token")) {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("login-token")}`,
      };

      axios
        .post(`${BASE_URL}/reports/`, data, { headers: headers })
        .then((response) => {
          console.log("Data sent successfully:", response.data);

          navigate("/main");
        })
        .catch((error) => {
          console.error("Error sending data:", error);
        });
    } else {
      console.warn("로그인 토큰이 없습니다.");
    }
  };
  return (
    <Container>
      <Logo />
      <Wrapper>
        <Title>오늘 하루 섭취한 카페인</Title>
        <Body>
          {/* <BsChevronLeft
          style={{
            width: "24px",
            height: "24px",
          }}
          onClick={navigateToPrev}}
        /> */}
          <img
            src={emptycup}
            alt="emptycup"
            style={{ margin: "52px 80px 46px 80px" }}
          />
          {/* <BsChevronRight
          style={{
            width: "24px",
            height: "24px",
          }}
        /> */}
        </Body>
        <Bottom>
          {isFill ? (
            <>
              <AlertText>
                오늘 하루 적정량보다
                <br /> {totalCaffeine} mg 더 섭취했어요.
                <br />
                <br /> 님, 조절이 필요해요!
              </AlertText>
              <EditBtn>
                <text>섭취량 수정하기</text>
              </EditBtn>
              <ShareBtn>
                <text>내 결과 공유하기</text>
              </ShareBtn>
            </>
          ) : (
            <RecordBtn onClick={recordHandler}>
              <text>섭취량 기록하기</text>
            </RecordBtn>
          )}
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

const TemporaryBox = styled.div`
  background-color: #d9d9d9;
  width: 120px;
  height: 240px;
  margin: 60px 0 70px 0;
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
