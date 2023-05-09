import { AccessTokenModel } from '../../domain/models/accessToken';
import { types } from '../reducers/token/types';

export function productActions() {
  return {
    addAccessToken(payload: AccessTokenModel['auth_token']) {
      return {
        type: types.ADD_ACCESS_TOKEN,
        payload,
      };
    },
  };
}
