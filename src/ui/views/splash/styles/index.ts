// Dependencies
import { ScaledSheet, moderateScale } from 'react-native-size-matters';

// Theme
import { Colors } from 'react-native-ui-lib';

// Helpers
import { isIOS } from '../../../helpers/quickFunctions';

export function splashViewStyles() {
  return ScaledSheet.create({
    containerViewStyle: {
      backgroundColor: Colors.white,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loadingDescriptionContainer: {
      position: 'absolute',
      bottom: moderateScale(isIOS() ? 50 : 30),
      right: moderateScale(10),
      left: moderateScale(10),
    },
  });
}
