// Dependencies
import { combineReducers } from '@reduxjs/toolkit';
import { tokenReducer } from './token';
import { countryReducer } from './country';

export const reducers = combineReducers({
  token: tokenReducer,
  country: countryReducer,
});
