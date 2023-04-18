import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [{
    id: '9D1B7E0',
    name: 'Thaicom',
    description: 'Thaicom is the name of a series of communications satellite, operated from Thailand.',
  },
  {
    id: 'F4F83DE',
    name: 'Telstar',
    description: 'Telstar 19V (Telstar 19 Vantage) is a communication satellite in the Telstar series of the Canadian satellite communications company Telesat',
  },
  {
    id: 'F3364BF',
    name: 'Iridium NEXT',
    description: 'In 2017, Iridium began launching Iridium NEXT, a second-generation worldwide network of telecommunications satellites.',
  },
  ],
  isLoading: false,
  error: '',
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    fetchMissions: (state) => state,
  },
  extraReducers: {},
});

export const { fetchMissions } = missionsSlice.actions;
export default missionsSlice.reducer;
