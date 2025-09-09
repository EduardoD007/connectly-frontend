import { configureStore } from "@reduxjs/toolkit";
import userSlice from './reducers/userReducer';
import tabSlicer from './reducers/activeTabReducer';
import refreshPostSlicer from './reducers/refreshPostReducer';

const store = configureStore({
  reducer: {
    user: userSlice,
    tab: tabSlicer,
    refreshPost: refreshPostSlicer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export default store;