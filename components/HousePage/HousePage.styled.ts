import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 100px;
  width: 100%;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
`;

export const H2 = styled.h2`
  margin: 0;
`;

export const P = styled.p`
  margin: 0;
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  height: 90vh;
  width: 100%;
`;

export const Left = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  gap: 40px;
  align-items: flex-start;
  justify-content: flex-start;
  height: 90vh;
  width: 100%;
`;

export const Right = styled.div`
  flex: 2;
  display: flex;
  align-self: flex-start;
  justify-content: center;
`;

export const FormWrapper = styled.form`
  height: 80vh;
  width: 80%;
  border: 1px solid lightgray;
  border-radius: 6px;
  padding: 30px 10px;
`;

export const Figure = styled.figure`
  position: relative;
  border-radius: 50%;
  height: 70px;
  width: 70px;
`;

export const AgentContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const InputWrapper = styled.div`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input<{ height: string }>`
  height: ${({ height }) => (height ? `${height}px` : null)};
  width: 80%;
  border-radius: 6px;
  border: 1px solid lightgray;
  padding-left: 20px;

  ${({ height }) => {
    if (height === "150") {
      return css`
        &::placeholder {
          position: relative;
          bottom: 40px;
          font-size: 16px;
          color: gray;
        }
      `;
    } else {
      return css`
        &::placeholder {
          font-size: 16px;
          color: gray;
        }
      `;
    }
  }}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: auto;
`;

export const Button = styled.button<{ color: string }>`
  padding: 25px 75px;
  background-color: ${({ color }) => (color ? color : null)};
  border: 1px solid purple;
  border-radius: 6px;
  color: ${({ color }) => (color === "purple" ? "white" : "purple")};
  font-size: 16px;
  max-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
