import { Navigation } from 'react-native-navigation';
import { initRoot } from './src/navigation/roots/init';
import { presetStyles } from './src/ui/helpers/presetStyles';
import { preloadScreens } from './src/navigation/helpers/preloadScreens';

preloadScreens();
presetStyles();
const startAPP = () => {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot(initRoot);
  });
};

startAPP();
