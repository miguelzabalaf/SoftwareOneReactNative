import { useDispatch } from 'react-redux';
import { Country } from '../entities/country';
import { CountryRepository } from '../repositories/country';
import { getAllCountries } from '../services/country';
import { countryActions } from '../../redux/actions/country';

export function countryRepositoryImplement(): CountryRepository {
  const dispatch = useDispatch();
  const { addCountries } = countryActions();
  return {
    getAllCountries(): Promise<Array<Country>> {
      return new Promise(async (resolve, reject) => {
        try {
          const resp = await getAllCountries();
          dispatch(addCountries(resp.data));
          resolve(resp.data);
        } catch (error) {
          reject(error);
        }
      });
    },
  };
}
