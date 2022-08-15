import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  cursor: pointer;
`;

export const TitleWrapper = styled.div<{ active: Boolean }>`
  height: 64px;
  width: 296px;
  border: 1px solid;
  padding: 0 18px;
  border-color: ${({ active }) => (active ? "transparent" : "#e5e7eb")};
  border-bottom: ${({ active }) => active && "none"};
  border-radius: ${({ active }) => (active ? "6px 6px 0 0" : "6px")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  transition: border 0.3s ease;
  box-shadow: ${({ active }) =>
    active ? "rgba(149, 157, 165, 0.2) 0px 8px 24px;" : null};
`;

export const Title = styled.p`
  font-size: 16px;
  margin: 0;
  font-weight: 500;
`;

export const Subtitle = styled.p`
  font-size: 13px;
  font-weight: 400;
  margin: 0;
`;

export const Content = styled.div`
  z-index: 999;
  position: absolute;
  border-radius: 0 0 6px 6px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 296px;
  padding-left: 25px;
  background-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const Column = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 5px;
`;

export const Option = styled.p`
  transition: all 0.3s ease;
  &:hover {
    color: #4b0082;
  }
`;
