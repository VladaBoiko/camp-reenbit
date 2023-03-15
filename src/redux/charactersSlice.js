import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCharacters,
  fetchCharactersByName,
  fetchCharacterById,
} from "./operations";
const charactersInitialState = {
  filter: "",
  page: 1,
};
const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const charactersSlice = createSlice({
  name: "characters",
  initialState: { items: [], isLoading: false, maxPage: 1, error: null },
  extraReducers: {
    [fetchCharacters.pending]: handlePending,
    [fetchCharacters.rejected]: handleRejected,
    [fetchCharactersByName.pending]: handlePending,
    [fetchCharactersByName.rejected]: handleRejected,
    [fetchCharacters.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload.results;
      state.maxPage = action.payload.info;
    },
    [fetchCharactersByName.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload.results;
      state.maxPage = action.payload.info;
    },
  },
});
const characterByIdSlice = createSlice({
  name: "characterById",
  initialState: { item: [], isLoading: false, error: null },
  extraReducers: {
    [fetchCharacterById.pending]: handlePending,
    [fetchCharacterById.rejected]: handleRejected,

    [fetchCharacterById.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.item = action.payload;
    },
  },
});
const filterSlice = createSlice({
  name: "filter",
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
  name: "page",
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

export const charactersReducer = charactersSlice.reducer;
export const characterByIdReducer = characterByIdSlice.reducer;
export const { addFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const { nextPage, prevPage } = pageSlice.actions;
export const pageReducer = pageSlice.reducer;
