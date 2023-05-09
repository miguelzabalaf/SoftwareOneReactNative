import axios from 'axios';
import { AccessTokenModel } from '../../models/accessToken';
import { getAccessToken } from '../token';

jest.mock('axios');

describe('Token - services', () => {
  describe('getAccessToken', () => {
    const accessTokenDummy: AccessTokenModel = {
      auth_token: 'abc123',
    };

    const response = {
      data: accessTokenDummy,
    };

    beforeEach(() => {
      (axios.get as jest.Mock).mockResolvedValue(response);
    });

    it('should return an access token', async () => {
      const result = await getAccessToken();
      expect(result).toEqual(response);
    });
  });
});
