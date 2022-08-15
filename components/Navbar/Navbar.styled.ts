import styled from "styled-components";

export const Container = styled.div`
  z-index: 999;
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 112px;
  background-color: transparent;
  border-radius: 6px;
  margin: auto;
  width: 80vw;
  backdrop-filter: blur(3px);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const Wrapper = styled.div`
  margin: 0 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 75vw;
`;

export const Button = styled.button`
  height: 64px;
  width: 162px;
  background-color: #4b0082;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  cursor: pointer;
`;
