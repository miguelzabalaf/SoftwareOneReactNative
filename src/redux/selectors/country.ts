import { useSelector } from 'react-redux';
import { createSelector } from '../helpers/createSelector';
import { ReduxStore } from '../store';

export function countrySelectors() {
  return {
    getCountries() {
      const selector = createSelector(
        (state: ReduxStore) => state.country,
        country => country.countries,
      );
      return useSelector(selector);
    },
  };
}
