import styled from "styled-components";
export const CharactersList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 32px;
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
  @media screen and (min-width: 540px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    gap: 20px;
  }
`;
export const BadResult = styled.h2`
  margin-left: auto;
  margin-right: auto;
  font-size: 50px;
  text-align: center;

  @media screen and (min-width: 1050px) {
    font-size: 60px;
    margin-bottom: 30px;
  }
`;
export const BadImage = styled.img`
  position: absolute;
  opacity: 50%;
`;
export const BadWrapper = styled.div`
  position: relative;
`;
