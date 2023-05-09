import { AccessTokenModel } from '../models/accessToken';

export interface TokenRepository {
  getAccessToken(): Promise<AccessTokenModel>;
}
