import axios, { AxiosResponse } from 'axios';
import { endpoints } from '../constants/endpoints';
import { trackPromise } from 'react-promise-tracker';
import { AccessTokenModel } from '../models/accessToken';
import { Config } from 'react-native-config';

export function getAccessToken(): Promise<AxiosResponse<AccessTokenModel>> {
  const request = axios.get(endpoints.token.getAccessToken, {
    headers: {
      'api-token': Config.SO_API_TOKEN,
      'user-email': Config.SO_EMAIL_ACCESS,
    },
  });
  return trackPromise(request);
}
