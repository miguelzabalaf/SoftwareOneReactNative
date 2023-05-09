import 'react-native';
import React from 'react';
import View from '../citiesView';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('CitiesView', () => {
  it('renders correctly', () => {
    renderer.create(<View />);
  });
});
