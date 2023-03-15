import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://rickandmortyapi.com/api";
export const fetchCharacters = createAsyncThunk(
  "characters/fetchAll",

  async (page = 1, thunkAPI) => {
    try {
      const response = await axios.get(`/character/?page=${page}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCharactersByName = createAsyncThunk(
  "characters/fetchAllByName",

  async (query, thunkAPI) => {
    try {
      const response = await axios.get(`/character/?name=${query}`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const fetchCharacterById = createAsyncThunk(
  "characters/fetchById",

  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/character/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
