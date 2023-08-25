import { Container } from "../Containter";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import axios from "axios";

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

  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(null);

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
  };

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
  };

  const BASE_URL =
    "https://port-0-coffee-master-lyc2mllqwjup5.sel3.cloudtype.app";

  const handleSubmit = () => {
    if (selectedBrand && selectedMenu && selectedAmount) {
      const data = {
        brand: selectedBrand,
        menu: selectedMenu,
        amount: selectedAmount,
      };

      axios
        .post(`${BASE_URL}/reports/`, data)
        .then((response) => {
          console.log("Data sent successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error sending data:", error);
        });
    } else {
      console.warn("브랜드, ");
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
                  onClick={() => [handleBrandClick("스타벅스")]}
                >
                  스타벅스
                </li>
                <li
                  className={selectedBrand === "이디야 커피" ? "selected" : ""}
                  onClick={() => handleBrandClick("이디야 커피")}
                >
                  이디야 커피
                </li>
                <li
                  className={selectedBrand === "투썸플레이스" ? "selected" : ""}
                  onClick={() => handleBrandClick("투썸플레이스")}
                >
                  투썸플레이스
                </li>
                <li
                  className={selectedBrand === "탐앤탐스" ? "selected" : ""}
                  onClick={() => handleBrandClick("탐앤탐스")}
                >
                  탐앤탐스
                </li>
                <li
                  className={
                    selectedBrand === "에너지 드링크" ? "selected" : ""
                  }
                  onClick={() => handleBrandClick("에너지 드링크")}
                >
                  에너지 드링크
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
                  className={selectedMenu === "카페라떼" ? "selected" : ""}
                  onClick={() => handleMenuClick("카페라떼")}
                >
                  카페라떼
                </li>
                <li
                  className={selectedMenu === "바닐라라떼" ? "selected" : ""}
                  onClick={() => handleMenuClick("바닐라라떼")}
                >
                  바닐라라떼
                </li>
                <li
                  className={selectedMenu === "오트밀라떼" ? "selected" : ""}
                  onClick={() => handleMenuClick("오트밀라떼")}
                >
                  오트밀라떼
                </li>
                <li
                  className={selectedMenu === "콜드브루" ? "selected" : ""}
                  onClick={() => handleMenuClick("콜드브루")}
                >
                  콜드브루
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
                  className={selectedAmount === "1잔" ? "selected" : ""}
                  onClick={() => handleAmountClick("1잔")}
                >
                  1잔
                </li>
                <li
                  className={selectedAmount === "2잔" ? "selected" : ""}
                  onClick={() => handleAmountClick("2잔")}
                >
                  2잔
                </li>
                <li
                  className={selectedAmount === "3잔" ? "selected" : ""}
                  onClick={() => handleAmountClick("3잔")}
                >
                  3잔
                </li>
                <li
                  className={selectedAmount === "4잔" ? "selected" : ""}
                  onClick={() => handleAmountClick("4잔")}
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
  margin-top: 72px;
  margin-bottom: 97px;
  cursor: pointer;
`;
