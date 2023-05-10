import { usePromiseTracker } from "react-promise-tracker";
import { countryRepositoryImplement } from "../../../../domain/repositoryImplement/country";
import { countryUseCases } from "../../../../domain/useCases/country";
import { countrySelectors } from "../../../../redux/selectors/country";
import { useEffect, useMemo, useState } from "react";
import { goToByLatLong } from "../../../helpers/quickFunctions";

interface UseDataProps {
    bouncedValue?: string;
}

export function useData(props: UseDataProps) {
    // Props
    const { bouncedValue } = props;

    // Use Cases
    const { getAllCountries, searchCountriesByName } = countryUseCases(countryRepositoryImplement());

    // States
    const [hasError, setHasError] = useState(false);

    // Selectors
    const { getCountries, getCountriesSearched } = countrySelectors();
    const countries = getCountries();
    const countriesSearched = getCountriesSearched();

    // Hooks
    const { promiseInProgress: loading } = usePromiseTracker();


    // Methods
    async function onGetAllCountries() {
        setHasError(false);
        try {
            await getAllCountries();
        } catch (error) {
            setHasError(true);
        }
    }

    // Methods
    function onSeeMap({ latitude, longitude }: { latitude: number, longitude: number; }) {
        goToByLatLong({ latitude, longitude });
    }

    async function onFindCountry() {
        setHasError(false);
        if (bouncedValue?.length) {
            try {
                await searchCountriesByName(bouncedValue);
            } catch (error) {
                setHasError(true);
            }
        }
    }

    useEffect(() => {
        if (!countries.length) {
            getAllCountries();
        }
    }, []);

    useEffect(() => {
        onFindCountry();
    }, [bouncedValue]);

    const listData = useMemo(() => countriesSearched?.length ? countriesSearched : countries, [countries, countriesSearched, bouncedValue,]);

    return {
        countries,
        loading,
        hasError,
        onGetAllCountries,
        onSeeMap,
        bouncedValue,
        countriesSearched,
        listData
    };
}