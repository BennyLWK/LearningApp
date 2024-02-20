import {createSlice} from '@reduxjs/toolkit';

import {darkTheme, lightTheme} from '../../constants';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    appTheme: lightTheme,
  },
  reducers: {
    toggleTheme: (state, action) => {
      switch (action.payload) {
        case 'light':
          state.appTheme = lightTheme;
          break;
        case 'dark':
          state.appTheme = darkTheme;
          break;
        default:
          break;
      }
    },
  },
});

export const {toggleTheme} = themeSlice.actions;
export const selectedTheme = state => state.theme.appTheme;

export default themeSlice.reducer;
