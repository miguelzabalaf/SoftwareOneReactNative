import { Country } from "../../../domain/entities/country";

export interface CountryInitialState {
  countries: Array<Country>;
  countriesSearched: Array<Country>;
}


export const initialState: CountryInitialState = {
  countries: [],
  countriesSearched: [],
};
