/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Config from 'react-native-config';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text>{Config.ENV_NAME}</Text>
    </SafeAreaView>
  );
}

export default App;
