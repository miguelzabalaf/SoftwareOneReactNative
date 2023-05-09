// Dependecies
import { PayloadAction } from '@reduxjs/toolkit';

// Types
import { types } from './types';

// Interfaces
import { TokenInitialState } from './interfaces';

// Models
import { AccessTokenModel } from '../../../domain/models/accessToken';

export const handler = {
  [types.ADD_ACCESS_TOKEN]: (
    state: TokenInitialState,
    action: PayloadAction<AccessTokenModel['auth_token']>,
  ) => {
    const accessToken = action.payload;
    return {
      ...state,
      accessToken,
    };
  },
};
