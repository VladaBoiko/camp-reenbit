import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacterById } from '../../redux/selectors';
import { fetchCharacterById } from '../../redux/operations';
import {
  Box,
  Wrapper,
  Title,
  AddTitle,
  GoBackLink,
  Header,
  HeaderContainer,
  Icon,
  Image,
  List,
  Item,
  SpanTitle,
  SpanText,
} from './CardDetails.styled';
export default function CardDetail() {
  const { id } = useParams();
  console.log(id);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const dispatch = useDispatch();

  useEffect(() => {
    if (id === '') {
      return;
    }
    dispatch(fetchCharacterById(id));
  }, [dispatch, id]);
  const { item } = useSelector(getCharacterById);
  let imgPath = null;
  if (!item.image) {
    imgPath =
      'https://www.shutterstock.com/image-vector/no-image-available-vector-hand-260nw-745639717.jpg';
  }
  if (item.image) {
    imgPath = `${item.image}`;
  }
  const img = `${imgPath}`;
  return (
    <>
      <Header>
        <HeaderContainer>
          <GoBackLink to={backLinkHref}>
            <Icon />
            Go back
          </GoBackLink>
        </HeaderContainer>
      </Header>

      <Box>
        <Image src={img} alt={item.name} />
        <Title>{item.name}</Title>
        <Wrapper>
          <AddTitle>Informations</AddTitle>
          <List>
            {item.gender && (
              <Item>
                <SpanTitle>Gender</SpanTitle>
                <SpanText>{item.gender}</SpanText>
              </Item>
            )}
            {item.status && (
              <Item>
                <SpanTitle>Status</SpanTitle>
                <SpanText>{item.status}</SpanText>
              </Item>
            )}
            {item.species && (
              <Item>
                <SpanTitle>Specie</SpanTitle>
                <SpanText>{item.species}</SpanText>
              </Item>
            )}
            {item.origin && (
              <Item>
                <SpanTitle>Origin</SpanTitle>
                <SpanText>{item.origin.name}</SpanText>
              </Item>
            )}
            {item.type && (
              <Item>
                <SpanTitle>Type</SpanTitle>
                <SpanText>{item.type}</SpanText>
              </Item>
            )}
          </List>
        </Wrapper>
      </Box>

      <Outlet />
    </>
  );
}

// gender: "Male"
// image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg"
// name: "Abradolf Lincler"
// origin: Object { name: "Earth (Replacement Dimension)", url: "https://rickandmortyapi.com/api/location/20" }
// species: "Human"
// status: "unknown"
// type: "Genetic experiment"
