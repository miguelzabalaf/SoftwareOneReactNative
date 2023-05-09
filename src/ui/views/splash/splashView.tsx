import React from 'react';
import { View, Text } from 'react-native';
import Icon from '../../components/icon';

export default function SplashView(): JSX.Element {
  return (
    <View>
      <Text>SplashView</Text>
      <Icon.SoftwareOne scale={0.35} />
    </View>
  );
}
