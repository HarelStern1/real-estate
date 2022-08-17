import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 20px;
  height: 100%;
  border-radius: 14px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LabelFlex = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 15px;
`;

export const Label = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 26px;
  padding: 5px 20px;
  font-size: 16px;
  color: #fff;
  background-color: ${({ color }) =>
    color === "green" ? "rgb(28, 207, 147)" : "#4b0082"};
  border-radius: 20px;
`;

export const Address = styled.div`
  font-weight: 600;
  font-size: 17px;
  max-width: 230px;
  line-height: 27px;
`;

export const Details = styled.div`
  display: flex;
  gap: 14px;
`;

export const Detail = styled.div`
  display: flex;
  gap: 2px;
  color: gray;
`;

export const Price = styled.div`
  color: #4b0082;
  font-weight: 600;
`;
