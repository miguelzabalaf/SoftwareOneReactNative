import axios, { AxiosResponse } from 'axios';
import { Country } from '../entities/country';
import { endpoints } from '../constants/endpoints';
import { trackPromise } from 'react-promise-tracker';

export function getAllCountries(): Promise<AxiosResponse<Array<Country>>> {
  const request = axios.get(endpoints.country.getAll);
  return trackPromise(request);
}
