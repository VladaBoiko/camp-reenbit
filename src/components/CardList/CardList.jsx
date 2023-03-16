import { useDispatch, useSelector } from 'react-redux';
import { NextPage, PreviousPage } from '../Pagination/Pagination';
import { getCharacters, getFilter, getPage } from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchCharacters, fetchCharactersByName } from '../../redux/operations';
import { nextPage, prevPage } from '../../redux/additionalSlices';
import {
  CharactersList,
  BadResult,
  BadImage,
  BadWrapper,
} from './CardList.styled';
import { CharacterCard } from '../CharacterCard/CharacterCard';
import { PaginationBox } from '../Pagination/Pagination';
const badImg = require('../../images/ready.png');
export const CardList = () => {
  const page = useSelector(getPage);
  const nextPageFunc = () => {
    dispatch(nextPage());
  };
  const prevPageFunc = () => {
    dispatch(prevPage());
  };
  const dispatch = useDispatch();
  const { items, error, maxPage } = useSelector(getCharacters);

  const query = useSelector(getFilter);
  const sortedCharacters = [...items].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  useEffect(() => {
    if (query.filter === '') {
      dispatch(fetchCharacters(page.page));
    }
    if (query.filter !== '') {
      dispatch(fetchCharactersByName(query.filter));
    }
  }, [dispatch, page, query.filter]);
  return (
    <>
      {error && (
        <BadWrapper>
          <BadResult>No matches</BadResult>
          <BadImage src={badImg} alt="no matches" />
        </BadWrapper>
      )}
      {!error && (
        <>
          <CharactersList>
            {sortedCharacters.map(character => {
              return <CharacterCard character={character} key={character.id} />;
            })}
          </CharactersList>

          {maxPage !== 1 && (
            <PaginationBox>
              {page.page !== 1 && query.filter === '' && (
                <PreviousPage loadFunction={prevPageFunc} />
              )}
              {page.page < maxPage.pages && query.filter === '' && (
                <NextPage loadFunction={nextPageFunc} />
              )}
            </PaginationBox>
          )}
        </>
      )}
    </>
  );
};
