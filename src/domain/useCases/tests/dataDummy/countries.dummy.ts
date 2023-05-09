import { Country, Region } from '../../../entities/country';

export const countriesDummy: Array<Country> = [
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
