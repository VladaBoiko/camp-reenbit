import { Button, PagBox, LeftArrow, RightArrow } from "./Pagination.styled";
export const NextPage = ({ loadFunction }) => {
  return (
    <Button type="button" onClick={loadFunction}>
      <RightArrow />
    </Button>
  );
};
export const PreviousPage = ({ loadFunction }) => {
  return (
    <Button type="button" onClick={loadFunction}>
      <LeftArrow />
    </Button>
  );
};
export const PaginationBox = ({ children }) => {
  return <PagBox>{children}</PagBox>;
};
