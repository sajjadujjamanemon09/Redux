import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Sajjaduj Jaman',
  email: 'sajjaduj.jaman09@gmail.com',
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {},
});

export default userSlice.reducer;