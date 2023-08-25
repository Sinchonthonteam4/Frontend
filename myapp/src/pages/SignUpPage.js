import React, { useState } from "react";
import InputComponent from "../components/InputComponent";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Container } from "../Containter";
import Logo from "../components/Logo";
import Header from "../components/Header";
const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (email === "") {
      setErrorMessage("아이디를 입력하세요");
      return;
    }
    if (password === "") {
      setErrorMessage("비밀번호를 입력하세요");
      return;
    }
    if (password !== passwordConfirm) {
      setErrorMessage("비밀번호와 비밀번호 확인이 일치하지 않습니다!");
      return;
    }
    setErrorMessage("");
    alert("회원 가입 성공!");
    navigate("/");
  };

  return (
    <Container>
      <Logo />
      <Header text="로그인 하기" />
      <InputComponent
        type="text"
        placeholder="사용할 이메일을 입력하세요. "
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputComponent
        type="password"
        placeholder="사용할 비밀번호를 입력하세요. "
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
      <InputComponent
        type="password"
        placeholder="비밀번호를 재입력하세요. "
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <StyledButton onClick={handleSignup}>로그인 하기</StyledButton>
    </Container>
  );
};

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  text-align: center;
  margin-top: -10px;
  margin-left: 0px;
  margin-bottom: 10px;
`;

const StyledButton = styled.button`
  display: inline-flex;
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
export default SignUpPage;
