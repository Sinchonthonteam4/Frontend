import styled from "styled-components";
import React, { useEffect, useRef } from "react";
import { CgClose } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const SideBar = ({ isOpen, setIsOpen }) => {
  const outside = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener("mousedown", handlerOutsie);
    return () => {
      document.removeEventListener("mousedown", handlerOutsie);
    };
  }, []);

  const handlerOutsie = (e) => {
    if (!outside.current.contains(e.target)) {
      toggleSide();
    }
  };

  const toggleSide = () => {
    setIsOpen(false);
  };

  return (
    <SideBarWrap
      ref={outside}
      style={isOpen ? { display: "block" } : { display: "none" }}
    >
      <CgClose
        style={{
          width: "24px",
          height: "24px",
          cursor: "pointer",
          color: "white",
        }}
        onClick={toggleSide}
        onKeyDown={toggleSide}
      />

      <ul>
        <Menu
          onClick={() => {
            navigate("/main");
          }}
        >
          하루 섭취량 보기
        </Menu>
        <Menu>주간 결과 레포트 보기</Menu>
        <Menu>챌린지 참여하기</Menu>
      </ul>
    </SideBarWrap>
  );
};

export default SideBar;

const SideBarWrap = styled.div`
  z-index: 5;
  padding: 12px;
  background-color: #ffc107;
  height: 100%;
  width: 295px;
  position: fixed;
  transition: 0.5s ease;
  top: 0;
  left: 0;
`;

const Menu = styled.li`
  display: block;
  padding: 4% 0;
  margin: 30px 0;
  list-style-type: none;
  font-size: 20px;
  font-weight: 600;
  color: white;
`;
