import { Country } from '../entities/country';

export interface CountryRepository {
  getAllCountries(): Promise<Country[]>;
  searchCountriesByName(name: string): Promise<Country[]>;
  removeCountriesSearched(): void;
}
