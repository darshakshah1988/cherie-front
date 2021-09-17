import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import layoutReducer from './slices/layoutSlice';

export default configureStore({
  // all reducers of our app
  reducer: {
    auth: authReducer,
    layout: layoutReducer
  },
  devTools: process.env.NEXT_PUBLIC_ENVIRONMENT === 'development'
});
