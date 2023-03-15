import styled from "styled-components";
import { ImSearch } from "react-icons/im";

export const Form = styled.form`
  width: 100%;
  margin-bottom: 32px;
  @media screen and (min-width: 1050px) {
    margin-bottom: 61px;
  }
`;
export const Input = styled.input`
  width: 100%;
  padding: 16px 48px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
`;
export const Button = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  /* width: 100%; */
  height: 100%;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;
export const Box = styled.div`
  position: relative;
`;
export const Icon = styled(ImSearch)`
  width: 17px;
  height: 17px;
  color: rgba(0, 0, 0, 0.54); ;
`;
