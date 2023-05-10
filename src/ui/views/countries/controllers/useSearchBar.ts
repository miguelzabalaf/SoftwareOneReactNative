import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import labels from "../../../../strings/labels";
import { useBouncedValue } from "../../../controllers/useBouncedValue";
import { TextInput } from "react-native";
import { countryUseCases } from "../../../../domain/useCases/country";
import { countryRepositoryImplement } from "../../../../domain/repositoryImplement/country";

export function useSearchBar() {

    // States
    const [value, onChangeValue] = useState('');

    // Constants
    const searchCountriesPlaceholder = labels.placeholders.searchCountries;

    // Hooks
    const { bouncedValue } = useBouncedValue({ value, delay: 1000 });

    // Memorized values
    const hasValue = useMemo(() => value?.length > 0, [value]);

    // References
    const searchBarRef = useRef<TextInput>(null);

    // Use Cases
    const { removeCountriesSearched } = countryUseCases(countryRepositoryImplement());

    function onFocusInput() {
        if (searchBarRef?.current) {
            searchBarRef?.current?.focus();
        }
    }

    const onPressButton = useCallback(() => {
        if (hasValue) {
            onChangeValue('');
            removeCountriesSearched();
        } else {
            onFocusInput();
        }
    }, [value]);

    return {
        value,
        onChangeValue,
        searchCountriesPlaceholder,
        hasValue,
        onPressButton,
        searchBarRef,
        bouncedValue
    };
}