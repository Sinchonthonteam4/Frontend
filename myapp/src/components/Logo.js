import { useState } from "react";
import styled from "styled-components";
import vector from "../images/Vector.svg";
import SideBar from "../components/SideBar";

const Logo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSide = () => {
    setIsOpen(!isOpen);
  };

  return (
    <LogoContainer>
      <MenuBtn role="button" onClick={toggleSide}>
        <MenuImg src={vector} />
      </MenuBtn>
      <LogoBox>커피 마스터</LogoBox>
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  margin: auto;
  width: 360px;
  height: 60px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const MenuBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const MenuImg = styled.img`
  width: 20px;
  height: 18px;
  margin: 21px 50px 21px 14px;
`;

const LogoBox = styled.div`
  padding-top: 5px;
  color: #ffc107;
  font-family: RixInooAriDuri;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export default Logo;
