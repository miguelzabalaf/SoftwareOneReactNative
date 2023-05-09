import axios from 'axios';
import { getAllCountries } from '../country';
import { Country, Region } from '../../entities/country';

jest.mock('axios');

describe('Country - services', () => {
  describe('getAllCountries', () => {
    const countriesDummy: Country[] = [
      {
        name: {
          common: 'Spain',
          official: 'Kingdom of Spain',
          nativeName: {
            spa: {
              official: 'Reino de España',
              common: 'España',
            },
          },
        },
        capital: ['Madrid'],
        region: Region.Europe,
        latlng: [40, -4],
      },
      {
        name: {
          common: 'Afghanistan',
          official: 'Islamic Republic of Afghanistan',
          nativeName: {
            prs: {
              official: 'جمهوری اسلامی افغانستان',
              common: 'افغانستان',
            },
            pus: {
              official: 'د افغانستان اسلامي جمهوریت',
              common: 'افغانستان',
            },
            tuk: {
              official: 'Owganystan Yslam Respublikasy',
              common: 'Owganystan',
            },
          },
        },
        capital: ['Kabul'],
        region: Region.Asia,
        latlng: [33, 65],
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
