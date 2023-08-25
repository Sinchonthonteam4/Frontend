import styled from "styled-components";
import InputComponent from "../components/InputComponent";
import { Container } from "../Containter";
import Logo from "../components/Logo";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
const LogInPage = () => {
  const navigate = useNavigate();
  const handleGoToSignUp = () => {
    navigate("/signup");
  };

  return (
    <Container>
      <Logo />
      <Header text="로그인 하기" />
      <InputComponent type="text" placeholder="아이디를 입력하세요" />
      <InputComponent type="password" placeholder="비밀번호를 입력하세요" />
      <MessageContainer>로그인 후 사용 가능합니다.</MessageContainer>
      <GotoSignUp onClick={handleGoToSignUp}>회원가입하기</GotoSignUp>
      <Styledbutton>로그인 하기</Styledbutton>
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
  color: var(--default-white, #fff);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 112.5% */
  border: none;
`;
export default LogInPage;
