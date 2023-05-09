// Dependencies
import { ScaledSheet } from 'react-native-size-matters';

// Theme
import { Colors } from 'react-native-ui-lib';

export function splashViewStyles() {
  return ScaledSheet.create({
    containerViewStyle: {
      backgroundColor: Colors.white,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
}
