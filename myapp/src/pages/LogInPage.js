import styled from "styled-components";
import InputComponent from "../components/InputComponent";
import { Container } from "../Containter";
import Logo from "../components/Logo";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const LogInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleGoToSignUp = () => {
    navigate("/signup");
  };
  const BASE_URL = `https://port-0-coffee-master-lyc2mllqwjup5.sel3.cloudtype.app`;
  const handleLogin = async () => {
    try {
      const response = await fetch(`${BASE_URL}/auth/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (data.message === "Login Success") {
        alert("로그인 성공!");
        localStorage.setItem("login-token", data.token.access);
        navigate("/main");
      } else {
        console.log(data.message || "로그인 실패!");
      }
    } catch (error) {
      console.log(error);
      console.log("서버와의 통신에 실패했습니다.");
    }
  };
  return (
    <Container>
      <Logo />
      <Header text="로그인 하기" />
      <InputComponent
        type="text"
        placeholder="아이디를 입력하세요"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputComponent
        type="password"
        placeholder="비밀번호를 입력하세요"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <MessageContainer>로그인 후 사용 가능합니다.</MessageContainer>
      <GotoSignUp onClick={handleGoToSignUp}>회원가입하기</GotoSignUp>
      <Styledbutton onClick={handleLogin}>로그인 하기</Styledbutton>
    </Container>
  );
};

const MessageContainer = styled.div`
  width: 308px;
  margin-top: 27px;
  margin-left: 32px;
  color: #313131;
  text-align: center;
  font-family: Pretendard Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px; /* 162.5% */
`;

const GotoSignUp = styled.div`
  cursor: pointer;
  width: 308px;
  color: #928d8d;
  margin-top: 20px;
  margin-left: 27px;
  text-align: center;
  font-family: Pretendard Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px; /* 162.5% */
  text-decoration: underline;
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
  color: var(—default-white, #fff);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 112.5% */
  border: none;
`;
export default LogInPage;
