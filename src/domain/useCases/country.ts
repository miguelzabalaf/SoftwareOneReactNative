import { CountryRepository } from '../repositories/country';

export function countryUseCases(respository: CountryRepository) {
  return {
    async getAllCountries() {
      return await respository.getAllCountries();
    },
    async searchCountriesByName(name: string) {
      return await respository.searchCountriesByName(name);
    },
    removeCountriesSearched() {
      return respository.removeCountriesSearched();
    }
  };
}
