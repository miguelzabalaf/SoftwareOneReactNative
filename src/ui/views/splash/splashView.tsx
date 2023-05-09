// Dependencies
import React from 'react';

// Components
import { View } from 'react-native';
import Text from 'react-native-ui-lib/text';
import Icon from '../../components/icon';

// Styles
import { splashViewStyles } from './styles';

export default function SplashView(): JSX.Element {
  const { containerViewStyle, loadingDescriptionContainer } =
    splashViewStyles();
  return (
    <View style={containerViewStyle}>
      <Icon.SoftwareOne scale={0.35} />
      <View style={loadingDescriptionContainer}>
        <Text muted center p>
          Loading...
        </Text>
      </View>
    </View>
  );
}
