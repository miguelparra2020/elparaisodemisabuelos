

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../../layouts/function-components/conunter';

const store = configureStore({
    
  reducer: {
    counter: counterReducer,
  },
});

export default store;