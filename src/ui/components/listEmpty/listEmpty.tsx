// Dependencies
import React from 'react';

// Components
import { Text, View, Colors, Spacings } from 'react-native-ui-lib';
import Icon from '../icon';

// Styles
import { listEmptyStyles } from './styles';

// Strings
import labels from '../../../strings/labels';
import CountryCard from '../countryCard';
import ButtonIcon from '../buttonIcon';

export interface ListEmptyProps {
  loading?: boolean;
  hasError?: boolean;
  onTryAgain: () => void;
}

export function ListEmpty(props: ListEmptyProps): JSX.Element {
  const { loading, hasError, onTryAgain } = props;

  const { containerStyle, containerButtonStyle } = listEmptyStyles();

  if (loading) {
    return (
      <View>
        {Array.from({ length: 15 }).map((_, index) => (
          <View key={index}>
            <CountryCard loading={loading} />
            <View height={Spacings.s3} />
          </View>
        ))}
      </View>
    );
  }

  return (
    <View style={containerStyle} flex>
      {Icon[hasError ? 'WiffiOff' : 'Layout']({
        color: Colors.neutral,
        scale: 2.5,
      })}
      <View height={Spacings.s6} />
      <Text p text muted regular>
        {hasError && labels.errors.weHaveProblemsToLoadTheCountries}
      </Text>
      <View height={Spacings.s3} />
      <View style={containerButtonStyle}>
        <ButtonIcon
          loading={loading}
          onPress={onTryAgain}
          Icon={() => Icon.Repeat({ color: Colors.neutral })}
        />
      </View>
    </View>
  );
}
