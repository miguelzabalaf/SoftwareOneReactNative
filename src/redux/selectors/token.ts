import { useSelector } from 'react-redux';
import { createSelector } from '../helpers/createSelector';
import { ReduxStore } from '../store';

export function tokenSelectors() {
  return {
    getAccessToken() {
      const selector = createSelector(
        (state: ReduxStore) => state.token,
        token => token.accessToken,
      );
      return useSelector(selector);
    },
  };
}
