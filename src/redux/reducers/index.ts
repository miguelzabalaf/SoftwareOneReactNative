// Dependencies
import { combineReducers } from '@reduxjs/toolkit';
import { countryReducer } from './country';

export const reducers = combineReducers({
  country: countryReducer,
});
