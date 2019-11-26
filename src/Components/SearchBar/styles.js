import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: ${props => (props.direction ? "row" : "column")};
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 140px;
  height: 30px;
  border-radius: 4px;
  padding: 6px 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
  padding: 6px 12px;
  margin: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 4px;
`;
