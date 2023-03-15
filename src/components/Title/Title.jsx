import { TitleImage } from "./Title.styled";
const titleImg = require("../../images/title.png");

export const Title = () => {
  return (
    <>
      <TitleImage src={titleImg} alt="Rick and Morty" />
    </>
  );
};
