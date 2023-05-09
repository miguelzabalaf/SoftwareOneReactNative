// Models
import { AccessTokenModel } from '../../../domain/models/accessToken';

export interface TokenInitialState {
  accessToken: AccessTokenModel['auth_token'];
}
