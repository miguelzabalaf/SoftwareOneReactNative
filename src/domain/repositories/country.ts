import { Country } from '../entities/country';

export interface CountryRepository {
  getAllCountries(): Promise<Country[]>;
}
