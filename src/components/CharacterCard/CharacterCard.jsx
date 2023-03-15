import {
  CharacterItem,
  Image,
  CardBox,
  CardTitle,
  CardText,
  Navigation,
} from "./CharacterCard.styled";
export const CharacterCard = ({ character }) => {
  return (
    <CharacterItem>
      <Navigation to={`${character.id}`} state={{ from: "/" }}>
        <Image src={character.image} alt={character.name} />
        <CardBox>
          <CardTitle>{character.name}</CardTitle>
          <CardText>{character.species}</CardText>
        </CardBox>
      </Navigation>
    </CharacterItem>
  );
};
