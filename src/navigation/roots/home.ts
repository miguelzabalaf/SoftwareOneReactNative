// Dependencies
import { LayoutRoot } from 'react-native-navigation';

// Strings

// Configurations
import { stackOptions } from '../options/stack';
import stacksName from '../constants/stacks';
import viewsName from '../constants/viewsNames';

export const homeRoot: LayoutRoot = {
  root: {
    stack: {
      id: stacksName.home,
      children: [
        {
          component: {
            name: viewsName.cities,
            id: viewsName.cities,
          },
        },
      ],
      options: stackOptions,
    },
  },
};
