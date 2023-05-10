import { useDispatch } from 'react-redux';
import { Country } from '../entities/country';
import { CountryRepository } from '../repositories/country';
import { getAllCountries, searchCountriesByName } from '../services/country';
import { countryActions } from '../../redux/actions/country';

export function countryRepositoryImplement(): CountryRepository {
  const dispatch = useDispatch();
  const { addCountries, addCountriesSearched, removeCountriesSearched } = countryActions();
  return {
    getAllCountries(): Promise<Array<Country>> {
      return new Promise(async (resolve, reject) => {
        try {
          const resp = await getAllCountries();
          dispatch(addCountries(resp.data));
          resolve(resp.data);
        } catch (error) {
          dispatch(addCountries([]));
          reject(error);
        }
      });
    },
    searchCountriesByName(name: string): Promise<Array<Country>> {
      return new Promise(async (resolve, reject) => {
        try {
          const resp = await searchCountriesByName(name);
          dispatch(addCountriesSearched(resp.data));
          resolve(resp.data);
        } catch (error) {
          dispatch(addCountriesSearched([]));
          reject(error);
        }
      });
    },
    removeCountriesSearched(): void {
      dispatch(removeCountriesSearched());
    }
  };
}
