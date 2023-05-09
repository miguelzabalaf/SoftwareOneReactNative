// Dependencies
import { LayoutRoot } from 'react-native-navigation';

// Strings

// Configurations
import { stackOptions } from '../options/stack';
import stacksName from '../constants/stacks';
import viewsName from '../constants/viewsNames';

export const initRoot: LayoutRoot = {
  root: {
    stack: {
      id: stacksName.init,
      children: [
        {
          component: {
            name: viewsName.splash,
            id: viewsName.splash,
          },
        },
      ],
      options: stackOptions,
    },
  },
};
