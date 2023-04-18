import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// API URL
const APIURL = `https://api.spacexdata.com/v3/missions`;

// Actions
const FETCH_MISSIONS = 'missionsSlice/FETCH_MISSIONS';

const FetchBook = createAsyncThunk(FETCH_MISSIONS, async (thunkAPI) => {
  try {
    const res = await axios.get(APIURL);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: 'Error fetching missions from API' });
  }
});

const initialState = {
  missions: [],
  isLoading: false,
  error: '',
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.fulfilled, (state, action) => {
        const missionsList = action.payload;
        missionsList.map((missions) => ({
          id: missions.id,
          missions_name: missions.name,
          description: missions.description,
        }));
        return ({
          ...state,
          isLoading: false,
          missions: missionsList,
        });
      })
      .addCase(fetchMissions.pending, (state) => ({
        ...state,
        isLoading: true,
        error: '',
      }))
      .addCase(fetchMissions.rejected, (state, action) => ({
        ...state,
        error: action.payload.error,
        isLoading: false,
      }));
  },
});   

export const { fetchMissions } = missionsSlice.actions;
export default missionsSlice.reducer;
