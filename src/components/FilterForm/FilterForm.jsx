import { Form, Input, Button, Box, Icon } from "./FilterForm.styled";
import { useSelector } from "react-redux";
import { getFilter } from "../../redux/selectors";
import { useDispatch } from "react-redux";
import { addFilter } from "../../redux/charactersSlice";

export const SearchForm = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const changeFilter = (e) => {
    dispatch(addFilter(e.currentTarget.value));
  };
  const formSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Form onSubmit={formSubmit}>
      <Box>
        <Input
          type="text"
          value={filter.filter}
          name="query"
          placeholder="Filter by name..."
          onChange={changeFilter}
        />
        <Button type="submit">
          <Icon />
        </Button>
      </Box>
    </Form>
  );
};
