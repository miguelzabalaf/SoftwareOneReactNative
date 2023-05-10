import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import labels from "../../../../strings/labels";
import { useBouncedValue } from "../../../controllers/useBouncedValue";
import { TextInput } from "react-native";

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


    // Methods
    function onFindCountry() {
        if (hasValue) {
            console.log('Searching country: ', bouncedValue);
        }
    }

    function onFocusInput() {
        if (searchBarRef?.current) {
            searchBarRef?.current?.focus();
        }
    }

    const onPressButton = useCallback(() => {
        if (hasValue) {
            onChangeValue('');
        } else {
            onFocusInput();
        }
    }, [value]);


    useEffect(() => {
        onFindCountry();
    }, [bouncedValue]);


    return {
        value,
        onChangeValue,
        searchCountriesPlaceholder,
        hasValue,
        onPressButton,
        searchBarRef
    };
}