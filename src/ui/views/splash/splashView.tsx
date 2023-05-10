// Dependencies
import React from 'react';

// Components
import { View } from 'react-native';
import Icon from '../../components/icon';

// Hooks
import { useTimeActive } from './controllers/useTimeActive';

// Styles
import { splashViewStyles } from './styles';

export default function SplashView(): JSX.Element {
  const { containerViewStyle } = splashViewStyles();
  useTimeActive();
  return (
    <View style={containerViewStyle}>
      <Icon.SoftwareOne scale={0.35} />
    </View>
  );
}
