import 'react-native';
import React from 'react';
import View from '../splashView';

import renderer from 'react-test-renderer';

describe('SplashView', () => {
  it('renders correctly', () => {
    renderer.create(<View />);
  });
});
