import { Navigation } from 'react-native-navigation';
import { ReduxStoreWrapper } from './reduxStoreWrapper';
import views from '../../ui/views';

export function preloadScreens() {
  for (const view in views) {
    if (Object.prototype.hasOwnProperty.call(views, view)) {
      const { component, name } = views[view];
      Navigation.registerComponent(
        name,
        () => props => ReduxStoreWrapper(component, props),
      );
    }
  }
}
