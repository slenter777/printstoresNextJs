import styled from "styled-components";

export const SpanText = styled.span``;

export const CountText = styled.span`
  padding: 0 20px;
`;

export const CountWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 35px;
  box-sizing: border-box;
`;

export const CounterButton = styled.button`
  width: 25px;
  height: 25px;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 50%;
  transition: 0.3s;
  &:hover {
    background-color: var(--lightBlue);
    color: white;
  }
`;
