import React, { useState } from "react";
import InputComponent from "../components/InputComponent";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Container } from "../Containter";
import Logo from "../components/Logo";
import Header from "../components/Header";

const BASE_URL = `https://port-0-coffee-master-lyc2mllqwjup5.sel3.cloudtype.app`;
const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState("");

  const handleSelectionChange = (e) => {
    setSelectedUniversity(e.target.value);
  };
  const navigate = useNavigate();

  const handleSignup = async () => {
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
    if (selectedUniversity === "") {
      alert("대학교를 선택하세요!");
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/auth/signup/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          university: selectedUniversity,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert("회원 가입 성공!");
        navigate("/");
      } else {
        setErrorMessage(data.message || "회원 가입 실패!");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("서버와의 통신에 실패했습니다.");
    }
  };

  return (
    <Container>
      <Logo />
      <Header text="회원가입 하기" />
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
      <SelectUniv>
        <select value={selectedUniversity} onChange={handleSelectionChange}>
          <option value="" disabled>
            학교를 선택하세요
          </option>
          <option value="서강대학교">서강대학교</option>
          <option value="연세대학교">연세대학교</option>
          <option value="이화여자대학교">이화여자대학교</option>
          <option value="홍익대학교">홍익대학교</option>
        </select>
      </SelectUniv>
      <StyledButton onClick={handleSignup}>회원가입 하기</StyledButton>
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

const SelectUniv = styled.div`
  margin-left: 52px;
  margin-bottom: 15px;
  width: 260px;

  padding: 8px 0px;
  flex-direction: column;
  align-items: flex-start;

  background: var(--default-white, #fff);
  select {
    display: flex;
    height: 100%;
    padding: 8px 24px;
    flex-direction: column;
    gap: var(--percent, 0px);
    align-self: stretch;
    text-align: center;
    width: 100%;
    border: none;
    background: transparent;
    color: var(--secondary-dark-color, #54595e);
    font-family: Pretendard Variable;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 100% */
    border-radius: var(--percent, 15px);
    border: 1px solid #ced4da;
    background: #fff;
  }
`;

export default SignUpPage;
