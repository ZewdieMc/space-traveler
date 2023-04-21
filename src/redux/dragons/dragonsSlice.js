import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  dragons: [],
  isLoading: false,
  error: '',
};

const baseURL = 'https://api.spacexdata.com/v4/dragons';

export const fetchDragons = createAsyncThunk(
  'dragons/fetchDragons',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(baseURL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: 'Error fetching dragons from API' });
    }
  },
);

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    reserveDragon: (state, action) => {
      const newDragons = state.dragons.map((dragon) => {
        if (dragon.id !== action.payload) {
          return dragon;
        }
        return { ...dragon, reserved: !dragon.reserved };
      });
      return ({
        ...state,
        dragons: newDragons,
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDragons.fulfilled, (state, action) => {
      const dragonList = action.payload.map((dragon) => ({
        id: dragon.id,
        name: dragon.name,
        description: dragon.description,
        flickr_images: [...dragon.flickr_images],
        wikipedia: dragon.wikipedia,
      }));
      return ({
        ...state,
        isLoading: false,
        dragons: dragonList,
      });
    })
      .addCase(fetchDragons.pending, (state) => ({
        ...state,
        isLoading: true,
        error: '',
      }))
      .addCase(fetchDragons.rejected, (state, action) => ({
        ...state,
        error: action.payload.error,
        isLoading: false,
      }));
  },
});

export const { reserveDragon } = dragonsSlice.actions;
export default dragonsSlice.reducer;
