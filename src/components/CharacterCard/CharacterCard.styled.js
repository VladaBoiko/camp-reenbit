import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Navigation = styled(NavLink)`
  text-decoration: none;
`;
export const CharacterItem = styled.li`
  width: 100%;
  @media screen and (max-width: 540px) {
    margin: 0 auto;
  }
  @media screen and (min-width: 540px) {
    flex-basis: calc((100% - 20px) / 2);
  }
  @media screen and (min-width: 800px) {
    flex-basis: calc((100% - 40px) / 3);
  }
  @media screen and (min-width: 1050px) {
    flex-basis: calc((100% - 60px) / 4);
  }
  max-width: 390px;
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.02);
  }
`;
export const Image = styled.img`
  border-radius: 4px 4px 0 0;
  max-height: 232px;
  object-fit: cover;
`;
export const CardBox = styled.div`
  padding: 12px 16px;
`;
export const CardTitle = styled.h2`
  font-family: "Roboto";
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 1px;
`;
export const CardText = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.6);
`;
