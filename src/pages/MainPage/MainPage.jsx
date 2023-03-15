import { Container } from "../../components/Container/Container.styled";
import { Title } from "../../components/Title/Title";
import { CardList } from "../../components/CardList/CardList";
import { MainTitle } from "./MainPage.styled";
import { SearchForm } from "../../components/FilterForm/FilterForm";
export default function MainPage() {
  return (
    <Container>
      <MainTitle>Rick and Morty</MainTitle>
      <Title />
      <SearchForm />
      <CardList />
    </Container>
  );
}
