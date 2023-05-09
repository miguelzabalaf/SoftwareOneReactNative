import { LayoutRoot, Navigation } from 'react-native-navigation';

export async function setRoot(root: LayoutRoot) {
  try {
    await Navigation.setRoot(root);
  } catch (error) {
    console.warn(error);
  }
}
