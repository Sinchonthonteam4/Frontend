import { Container } from "../Containter";
import { useState } from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RecordPage = () => {
  const [brandDropdownOpen, setBrandDropdownOpen] = useState(false);
  const [menuDropdownOpen, setMenuDropdownOpen] = useState(false);
  const [amountDropdownOpen, setAmountDropdownOpen] = useState(false);

  const toggleBrandDropdown = () => {
    setBrandDropdownOpen(!brandDropdownOpen);
  };

  const toggleMenuDropdown = () => {
    setMenuDropdownOpen(!menuDropdownOpen);
  };

  const toggleAmountDropdown = () => {
    setAmountDropdownOpen(!amountDropdownOpen);
  };

  const handleAmountInputClick = (e) => {
    e.stopPropagation();
  };

  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedMenu, setSelectedMenu] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(0);

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
  };

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  const handleAmountClick = (amount) => {
    setSelectedAmount(Number(amount));
  };
  const navigate = useNavigate();
  const BASE_URL = `https://port-0-coffee-master-lyc2mllqwjup5.sel3.cloudtype.app`;

  const handleSubmit = () => {
    if (selectedBrand && selectedMenu && selectedAmount) {
      const data = {
        cafe: selectedBrand,
        drink: selectedMenu,
        cups: selectedAmount,

      };
      console.log(data);

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
      console.warn("브랜드, 메뉴, 용량을 모두 선택하세요.");
    }
  };

  return (
    <Container>
      <Logo />
      <Wrapper>
        <Title>기록하기</Title>
        <BrandName>
          <span>브랜드명</span>
          <DropdownContent>
            <button onClick={toggleBrandDropdown}>브랜드를 선택하세요</button>
            {brandDropdownOpen && (
              <ul>
                <li
                  className={selectedBrand === "스타벅스" ? "selected" : ""}
                  onClick={() => handleBrandClick("스타벅스")}
                >
                  스타벅스
                </li>
                <li
                  className={selectedBrand === "이디야커피" ? "selected" : ""}
                  onClick={() => handleBrandClick("이디야커피")}
                >
                  이디야커피
                </li>
                <li
                  className={selectedBrand === "투썸플레이스" ? "selected" : ""}
                  onClick={() => handleBrandClick("투썸플레이스")}
                >
                  투썸플레이스
                </li>

              </ul>
            )}
          </DropdownContent>
        </BrandName>
        <Menu>
          <span>메뉴</span>
          <DropdownContent>
            <button onClick={toggleMenuDropdown}>메뉴를 선택하세요</button>
            {menuDropdownOpen && (
              <ul>
                <li
                  className={selectedMenu === "아메리카노" ? "selected" : ""}
                  onClick={() => handleMenuClick("아메리카노")}
                >
                  아메리카노
                </li>
                <li
                  className={selectedMenu === "에스프레소" ? "selected" : ""}
                  onClick={() => handleMenuClick("에스프레소")}
                >
                  에스프레소
                </li>
                <li
                  className={selectedMenu === "카페라떼" ? "selected" : ""}
                  onClick={() => handleMenuClick("카페라떼")}
                >
                  카페라떼
                </li>
                <li
                  className={selectedMenu === "카푸치노" ? "selected" : ""}
                  onClick={() => handleMenuClick("카푸치노")}
                >
                  카푸치노
                </li>
                <li
                  className={
                    selectedMenu === "카라멜마키아토" ? "selected" : ""
                  }
                  onClick={() => handleMenuClick("카라멜마키아토")}
                >
                  카라멜마키아토
                </li>
              </ul>
            )}
          </DropdownContent>
        </Menu>
        <Amount>
          <span>섭취량</span>
          <DropdownContent>
            <button onClick={toggleAmountDropdown}>섭취량을 선택하세요</button>
            {amountDropdownOpen && (
              <ul>
                <li
                  className={selectedAmount === 1 ? "selected" : ""}
                  onClick={() => handleAmountClick(1)}
                >
                  1잔
                </li>
                <li
                  className={selectedAmount === 2 ? "selected" : ""}
                  onClick={() => handleAmountClick(2)}
                >
                  2잔
                </li>
                <li
                  className={selectedAmount === 3 ? "selected" : ""}
                  onClick={() => handleAmountClick(3)}
                >
                  3잔
                </li>
                <li
                  className={selectedAmount === 4 ? "selected" : ""}
                  onClick={() => handleAmountClick(4)}
                >
                  4잔
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="직접 입력하기"
                    onClick={handleAmountInputClick}
                  />
                </li>
              </ul>
            )}
          </DropdownContent>
        </Amount>
        <ResultBtn onClick={handleSubmit}>결과 보기</ResultBtn>
      </Wrapper>
    </Container>
  );
};

export default RecordPage;

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
  line-height: 32px;
  margin-top: 42px;
`;

const DropdownContent = styled.div`
  width: 164px;
  height: auto;
  display: flex;
  padding: 8px var(--percent, 0px);
  flex-direction: column;
  gap: var(--percent, 0px);
  border-radius: 8px;
  border: 1px solid var(--stroke-input, #ced4da);
  background: var(--default-white, #fff);
  overflow: hidden;

  button {
    display: flex;
    padding: 8px 24px;
    flex-direction: column;
    align-items: center;
    gap: var(--percent, 0px);
    align-self: stretch;
    border: none;
    background-color: transparent;
    color: var(--secondary-light-color, #abb5be);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 12px; /* 100% */
    text-transform: uppercase;
    cursor: pointer;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
    display: flex;
    padding: 8px 24px;
    gap: var(--percent, 0px);
    align-self: stretch;
    text-align: left;
    color: var(--secondary-dark-color, #54595e);
    font-family: Pretendard Variable;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    cursor: pointer;

    input {
      max-width: 100%;
      width: 100%;
      border: none;
      color: var(--secondary-dark-color, #54595e);
      font-family: Pretendard Variable;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 16px;
    }
  }

  li.selected {
    border-radius: var(--percent, 0px);
    background: #fff3cd;
  }
`;

const BrandName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: self-start;
  margin-top: 48px;

  span {
    display: flex;
    width: 115px;
    height: 45px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #ffc107;
    text-align: center;
    font-family: Pretendard Variable;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: self-start;
  margin-top: 48px;

  span {
    display: flex;
    width: 115px;
    height: 45px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #ffc107;
    text-align: center;
    font-family: Pretendard Variable;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const Amount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: self-start;
  margin-top: 48px;

  span {
    display: flex;
    width: 115px;
    height: 45px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #ffc107;
    text-align: center;
    font-family: Pretendard Variable;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const ResultBtn = styled.div`
  display: inline-flex;
  padding: 10px 16px;
  align-items: flex-start;
  gap: 8px;
  border-radius: 6px;
  background: #ffc107;
  color: var(--default-white, #fff);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 112.5% */
  margin-top: 43px;
  margin-bottom: 97px;
  cursor: pointer;
`;
