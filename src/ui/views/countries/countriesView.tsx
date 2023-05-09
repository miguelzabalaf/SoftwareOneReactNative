import React from 'react';
import { SafeAreaView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import SearchBar from '../../components/searchBar';

export default function CountriesView(): JSX.Element {
  const { containerStyle } = CountriesViewStyles();
  return (
    <SafeAreaView style={containerStyle}>
      <SearchBar />
    </SafeAreaView>
  );
}

function CountriesViewStyles() {
  return ScaledSheet.create({
    containerStyle: {
      flex: 1,
    },
  });
}
