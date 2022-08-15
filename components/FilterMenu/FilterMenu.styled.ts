import styled from "styled-components";

export const Wrapper = styled.div<{ active: Boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: all 0.3s ease;
  margin: 0 auto;
  min-height: ${({ active }) => (active ? "150px" : "50px")};
  width: 100%;
  height: fit-content;
  background-color: rgb(207, 210, 212);
  border-radius: 6px;
  cursor: pointer;
`;

export const Title = styled.h2`
  /* position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0); */
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  margin: 10px 0;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;
  margin-top: 10px;
`;
