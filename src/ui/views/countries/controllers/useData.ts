import { usePromiseTracker } from "react-promise-tracker";
import { countryRepositoryImplement } from "../../../../domain/repositoryImplement/country";
import { countryUseCases } from "../../../../domain/useCases/country";
import { countrySelectors } from "../../../../redux/selectors/country";
import { useEffect, useState } from "react";
import { goToByLatLong } from "../../../helpers/quickFunctions";

export function useData() {
    // Use Cases
    const { getAllCountries } = countryUseCases(countryRepositoryImplement());

    // States
    const [hasError, setHasError] = useState(false);

    // Selectors
    const { getCountries } = countrySelectors();
    const countries = getCountries();

    // Hooks
    const { promiseInProgress: loading } = usePromiseTracker();


    // Methods
    async function onGetAllCountries() {
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

    useEffect(() => {
        if (!countries.length) {
            getAllCountries();
        }
    }, []);


    return {
        countries,
        loading,
        hasError,
        onGetAllCountries,
        onSeeMap,
    };
}