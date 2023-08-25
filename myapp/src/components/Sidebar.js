import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import { CgClose } from "react-icons/cg";

const Sidebar = ({ width = 295, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [xPosition, setX] = useState(width);
  const side = useRef();

  // button 클릭 시 토글
  const toggleMenu = () => {
    if (xPosition > 0) {
      setX(0);
      setIsOpen(true);
    } else {
      setX(width);
      setIsOpen(false);
    }
  };

  // 사이드바 외부 클릭시 닫히는 함수
  const handleClose = (e) => {
    let sideArea = side.current;
    let sideCildren = side.current.contains(e.target);
    if (isOpen && (!sideArea || !sideCildren)) {
      setX(width);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClose);
    return () => {
      window.removeEventListener("click", handleClose);
    };
  });

  return (
    <Wrapper>
      <SidebarContainer>
        <ToggleBtn onClick={() => toggleMenu()}>
          {isOpen ? <CgClose /> : <></>}
        </ToggleBtn>
      </SidebarContainer>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  background-color: white;
  height: 100%;
`;
const SidebarContainer = styled.div`
  background-color: inherit;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  transition: 0.4s ease;
  color: #202020;
  height: 100%;
  z-index: 99;
`;
const ToggleBtn = styled.button`
  position: relative;
  left: 330px;
  top: 10px;
  width: 40px;
  height: 40px;
  z-index: 99;
  transition: 0.8s ease;
  border: 2px solid #202020;
  border-radius: 40px;
  overflow: hidden;
`;
