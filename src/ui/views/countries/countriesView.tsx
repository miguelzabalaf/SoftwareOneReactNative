import React from 'react';
import { SafeAreaView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import SearchBar from '../../components/searchBar';
import { Colors } from 'react-native-ui-lib';
import { useSearchBar } from './controllers/useSearchBar';

export default function CountriesView(): JSX.Element {
  const { containerStyle } = CountriesViewStyles();
  const {
    value,
    onChangeValue,
    searchCountriesPlaceholder,
    hasValue,
    onPressButton,
    searchBarRef,
  } = useSearchBar();
  return (
    <SafeAreaView style={containerStyle}>
      <SearchBar
        ref={searchBarRef}
        value={value}
        onChangeValue={onChangeValue}
        placeholder={searchCountriesPlaceholder}
        hasValue={hasValue}
        onPressButton={onPressButton}
      />
    </SafeAreaView>
  );
}

function CountriesViewStyles() {
  return ScaledSheet.create({
    containerStyle: {
      flex: 1,
      backgroundColor: Colors.white,
    },
  });
}
