import styled from "styled-components";

const InputComponent = ({ type, placeholder, value, onChange }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
const StyledInput = styled.input`
  width: 260px;
  height: 50px;
  margin-left: 52px;
  margin-bottom: 23px;
  border-radius: 15px;
  border: 1px solid #d9d9d9;
  background: #fff;
  color: #928d8d;
  text-align: center;
  font-family: Pretendard Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  // input에서 기본적으로 제공하는 외곽선 제거 (필요하다면 추가)
  outline: none;
  // placeholder 스타일 설정
  &::placeholder {
    color: #928d8d;
  }
`;

export default InputComponent;
