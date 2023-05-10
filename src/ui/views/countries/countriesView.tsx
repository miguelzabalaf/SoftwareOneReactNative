import React from 'react';
import { KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import SearchBar from '../../components/searchBar';
import { Colors } from 'react-native-ui-lib';
import { useSearchBar } from './controllers/useSearchBar';
import List from './components/list';
import { useData } from './controllers/useData';
import { isIOS } from '../../helpers/quickFunctions';

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
  const { countries, loading, hasError, onGetAllCountries, onSeeMap } =
    useData();
  return (
    <SafeAreaView style={containerStyle}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={isIOS() ? 'padding' : 'height'}>
        <List
          onPress={onSeeMap}
          onTryAgain={onGetAllCountries}
          hasError={hasError}
          loading={loading}
          data={countries}
          ListHeaderComponent={
            <SearchBar
              ref={searchBarRef}
              value={value}
              onChangeValue={onChangeValue}
              placeholder={searchCountriesPlaceholder}
              hasValue={hasValue}
              onPressButton={onPressButton}
            />
          }
        />
      </KeyboardAvoidingView>
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
