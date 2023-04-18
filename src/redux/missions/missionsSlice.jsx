import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// API URL
const APIURL = 'https://api.spacexdata.com/v3/missions';

// Actions
const FETCH_MISSIONS = 'missionsReducer/FETCH_MISSIONS';

// Action Creators
export const fetchMissions = createAsyncThunk(FETCH_MISSIONS, async (thunkAPI) => {
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
  reducers: {
    joinMission: (state, action) => {
      console.log(state.missions); // eslint-disable-line no-console
      const newMissions = state.missions.map((mission) => {
        if (mission.id !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
      return { ...state, missions: newMissions };
    },
    leaveMission: (state, action) => {
      const newMissions = state.missions.map((mission) => {
        if (mission.id === action.payload) {
          return { ...mission, reserved: false };
        }
        return mission;
      });
      return { ...state, missions: newMissions };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.fulfilled, (state, action) => {
        const response = action.payload;
        const MissionsData = [];
        response.forEach((mission) => {
          MissionsData.push({
            id: mission.mission_id,
            mission_name: mission.mission_name,
            description: mission.description,
          });
        });
        return ({
          ...state,
          isLoading: false,
          missions: MissionsData,
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

export const { joinMission, leaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;
