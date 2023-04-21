import { createSlice } from '@reduxjs/toolkit';

const bookCata = 'Categories';
const initialState = {
  bookName: bookCata,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    statusCheck: () => 'Under construction',
  },
});

export default categoriesSlice.reducer;
