// Dependecies
import { PayloadAction } from '@reduxjs/toolkit';

// Types
import { types } from './types';

// Interfaces
import { CountryInitialState } from './interfaces';

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
};
