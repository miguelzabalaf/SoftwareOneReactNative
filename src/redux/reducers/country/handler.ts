// Dependecies
import { PayloadAction } from '@reduxjs/toolkit';

// Types
import { types } from './types';

// Interfaces
import { CountryInitialState } from './initialState';

// Models
import { Country } from '../../../domain/entities/country';

export const handler = {
  [types.ADD_COUNTRIES]: (
    state: CountryInitialState,
    action: PayloadAction<Array<Country>>,
  ) => {
    const countries = action.payload;
    return {
      ...state,
      countries,
    };
  },
  [types.ADD_COUNTRIES_SEARCHED]: (
    state: CountryInitialState,
    action: PayloadAction<Array<Country>>,
  ) => {
    const countriesSearched = action.payload;
    return {
      ...state,
      countriesSearched,
    };
  },
  [types.REMOVE_COUNTRIES_SEARCHED]: (
    state: CountryInitialState,
  ) => {
    return {
      ...state,
      countriesSearched: [],
    };
  }
};
