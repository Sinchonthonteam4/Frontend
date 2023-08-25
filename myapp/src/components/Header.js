import styled from "styled-components";

const Header = ({ text }) => {
  return <HeaderContainer> {text}</HeaderContainer>;
};

const HeaderContainer = styled.div`
  margin-top: 42px;
  margin-bottom: 63px;
  color: #000;
  text-align: center;
  font-family: Pretendard Variable;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
`;

export default Header;
