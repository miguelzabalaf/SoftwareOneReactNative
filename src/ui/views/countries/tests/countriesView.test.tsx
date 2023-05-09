import 'react-native';
import React from 'react';
import View from '../countriesView';

import renderer from 'react-test-renderer';

describe('CountriesView', () => {
  it('renders correctly', () => {
    renderer.create(<View />);
  });
});
