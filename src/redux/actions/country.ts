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
  };
}
