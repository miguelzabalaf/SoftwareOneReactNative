import { CountryRepository } from '../repositories/country';

export function countryUseCases(respository: CountryRepository) {
  return {
    async getAllCountries() {
      return await respository.getAllCountries();
    },
  };
}
