import 'react-native';
import React from 'react';
import Component from '../countryCard';

import renderer from 'react-test-renderer';

describe('CountryCard', () => {
  it('renders correctly', () => {
    renderer.create(<Component />);
  });
});
