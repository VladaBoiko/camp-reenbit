import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";
export const Header = styled.header``;
export const HeaderContainer = styled.div`
  max-width: 1440px;
  padding: 21px 50px;
  margin: 0 auto;
`;
export const GoBackLink = styled(NavLink)`
  font-family: "Karla";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.17;
  color: #000000;
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  align-items: center;
`;
export const Icon = styled(BiLeftArrowAlt)`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;
export const Image = styled.img`
  border-radius: 50%;
  border: 5px solid #f2f2f7;
  margin-bottom: 16px;
  margin-left: auto;
  margin-right: auto;
  width: 60%;

  @media screen and (min-width: 540px) {
    width: 305px;
  }
`;
export const Box = styled.div`
  padding-top: 56px;
  width: 100%;
  max-width: 550px;
  padding: 56px 24px 85px 24px;
  margin: 0 auto;

  @media screen and (min-width: 1050px) {
    padding-top: 0;
    width: 443px;
    padding: 10px 15px 142px 15px;
  }
`;

export const Title = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 1.17;

  text-align: center;
  color: #081f32;
  margin-bottom: 48px;
  text-align: center;
  @media screen and (min-width: 1050px) {
    font-size: 48px;
  }
`;
export const Wrapper = styled.div``;
export const AddTitle = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  font-size: 20px;
  letter-spacing: 0.15px;
  color: #8e8e93;
  margin-bottom: 17px;
  @media screen and (min-width: 1050px) {
    text-align: center;
    margin-bottom: 48px;
  }
`;
export const List = styled.ul`
  list-style: none;
`;
export const Item = styled.li`
  padding-bottom: 12px;
  padding-top: 9px;
  border-bottom: 1px solid rgba(33, 33, 33, 0.08);
  display: flex;
  flex-direction: column;
`;
export const SpanTitle = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  color: #081f32;
`;
export const SpanText = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;

  letter-spacing: 0.25px;

  color: #6e798c;
`;
