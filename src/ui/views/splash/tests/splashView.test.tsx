import 'react-native';
import React from 'react';
import View from '../splashView';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('SplashView', () => {
  it('renders correctly', () => {
    renderer.create(<View />);
  });
});
