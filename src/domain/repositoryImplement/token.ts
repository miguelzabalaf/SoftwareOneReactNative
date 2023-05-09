import { useDispatch } from 'react-redux';
import { AccessTokenModel } from '../models/accessToken';
import { TokenRepository } from '../repositories/token';
import { getAccessToken } from '../services/token';
import { tokenActions } from '../../redux/actions/token';

export function tokenRepositoryImplement(): TokenRepository {
  const dispatch = useDispatch();
  const { addAccessToken } = tokenActions();
  return {
    getAccessToken(): Promise<AccessTokenModel> {
      return new Promise(async (resolve, reject) => {
        try {
          const resp = await getAccessToken();
          dispatch(addAccessToken(resp.data.auth_token));
          resolve(resp.data);
        } catch (error) {
          reject(error);
        }
      });
    },
  };
}
