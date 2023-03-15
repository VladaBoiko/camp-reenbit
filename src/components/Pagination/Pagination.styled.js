import styled from "styled-components";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  color: rgba(46, 107, 3, 0.8);
  &:hover {
    color: rgb(46, 107, 3);
    cursor: pointer;
  }
`;
export const PagBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
`;
export const LeftArrow = styled(FaArrowCircleLeft)`
  width: 50px;
  height: 50px;
`;
export const RightArrow = styled(FaArrowCircleRight)`
  width: 50px;
  height: 50px;
`;
