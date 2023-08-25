import { Container } from "../Containter";
import { useState } from "react";
import styled from "styled-components";

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

  // 에너지 드링크 클릭할 경우 Menu 선택 불가능
  const [energyDrinkSelected, setEnergyDrinkSelected] = useState(false);

  const handleEnergyDrinkClick = () => {
    setEnergyDrinkSelected(true);
    // 이후에 필요한 로직 추가
  };

  return (
    <Container>
      <Wrapper>
        <Title>기록하기</Title>
        <BrandName>
          <span>브랜드명</span>
          <DropdownContent>
            <button onClick={toggleBrandDropdown}>브랜드를 선택하세요</button>
            {brandDropdownOpen && (
              <ul>
                <li>스타벅스</li>
                <li>이디야 커피</li>
                <li>투썸플레이스</li>
                <li>탐앤탐스</li>
                <li
                  onClick={handleEnergyDrinkClick}
                  className={energyDrinkSelected ? "disabled" : ""}
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
            <button
              onClick={toggleMenuDropdown}
              className={energyDrinkSelected ? "disabled" : ""}
              disabled={energyDrinkSelected}
            >
              메뉴를 선택하세요
            </button>
            {menuDropdownOpen && !energyDrinkSelected && (
              <ul>
                <li>아메리카노</li>
                <li>카페라떼</li>
                <li>바닐라 라떼</li>
                <li>오트밀라떼</li>
                <li>콜드브루</li>
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
                <li>1잔</li>
                <li>2잔</li>
                <li>3잔</li>
                <li>4잔</li>
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
        <ResultBtn>결과 보기</ResultBtn>
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

    input {
      max-width: 100%;
      width: 100%;
      border: none;
    }
  }
`;

const BrandName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: self-start;
  margin-top: 26px;

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
  margin-top: 35px;

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
  margin-top: 36px;

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
`;
