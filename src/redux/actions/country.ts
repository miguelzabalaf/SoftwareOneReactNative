import { Country } from '../../domain/entities/country';
import { types } from '../reducers/country/types';

export function countryActions() {
  return {
    addCountries(payload: Array<Country>) {
      return {
        type: types.ADD_COUNTRIES,
        payload,
      };
    },
    addCountriesSearched(payload: Array<Country>) {
      return {
        type: types.ADD_COUNTRIES_SEARCHED,
        payload,
      };
    },
    removeCountriesSearched() {
      return {
        type: types.REMOVE_COUNTRIES_SEARCHED,
      };
    }
  };
}
