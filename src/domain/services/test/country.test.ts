import axios from 'axios';
import { getAllCountries } from '../country';
import { Country } from '../../entities/country';

jest.mock('axios');

describe('Country - services', () => {
  describe('getAllCountries', () => {
    const countriesDummy: Country[] = [
      {
        country_name: 'Argentina',
        country_phone_code: 0,
        country_short_name: 'XX',
      },
      {
        country_name: 'Brasil',
        country_phone_code: 0,
        country_short_name: 'XX',
      },
    ];

    const response = {
      data: countriesDummy,
    };

    beforeEach(() => {
      (axios.get as jest.Mock).mockResolvedValue(response);
    });

    it('should return a list of countries', async () => {
      const result = await getAllCountries();
      expect(result).toEqual(response);
    });
  });
});
