import { configureStore } from '@reduxjs/toolkit';
import { EnquiryReducer } from './slices/course';

const store = configureStore({
  reducer: EnquiryReducer, 
});

export default store;