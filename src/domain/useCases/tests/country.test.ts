import { CountryRepository } from '../../repositories/country';
import { countryUseCases } from '../country';
import { countriesDummy } from './dataDummy/countries.dummy';

describe('Country - use cases', () => {
  const countryRepositoryMock: jest.Mocked<CountryRepository> = {
    getAllCountries: jest.fn(),
  };
  const { getAllCountries } = countryUseCases(countryRepositoryMock);

  beforeAll(() => {
    getAllCountries();
  });

  it('should call getAllCountries from repository', () => {
    expect(countryRepositoryMock.getAllCountries).toHaveBeenCalled();
  });

  it('should call getAllCountries from repository only once', () => {
    expect(countryRepositoryMock.getAllCountries).toHaveBeenCalledTimes(1);
  });

  it('should not call getAllCountries from repository twice', () => {
    expect(countryRepositoryMock.getAllCountries).not.toHaveBeenCalledTimes(2);
  });

  it('should call getallcountries from repository and return array dummy data', async () => {
    countryRepositoryMock.getAllCountries.mockResolvedValueOnce(countriesDummy);
    const result = await getAllCountries();
    expect(result).toEqual(countriesDummy);
  });
});
