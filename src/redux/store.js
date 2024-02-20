import {configureStore} from '@reduxjs/toolkit';

import themeReducer from './theme/themeSlice';

export default configureStore({
  reducer: {
    theme: themeReducer,
  },
});
