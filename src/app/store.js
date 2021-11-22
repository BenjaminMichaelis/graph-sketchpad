import { configureStore } from '@reduxjs/toolkit';
import graphReducer from '../features/graph/graphSlice';
import ClickActionReducer from '../ClickAction';
// import counterReducer from '';

export const store = configureStore({
  reducer: {
    graph: graphReducer,
    clickAction: ClickActionReducer
  }
});
