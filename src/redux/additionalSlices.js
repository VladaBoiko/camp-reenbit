import { createSlice } from '@reduxjs/toolkit';
const charactersInitialState = {
  filter: '',
  page: 1,
};
const filterSlice = createSlice({
  name: 'filter',
  initialState: charactersInitialState,
  reducers: {
    addFilter: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },
  },
});
const pageSlice = createSlice({
  name: 'page',
  initialState: charactersInitialState,
  reducers: {
    nextPage: {
      reducer(state) {
        state.page = state.page + 1;
      },
    },
    prevPage: {
      reducer(state) {
        if (state.page === 1) {
          return;
        }
        state.page = state.page - 1;
      },
    },
  },
});
export const { addFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const { nextPage, prevPage } = pageSlice.actions;
export const pageReducer = pageSlice.reducer;
