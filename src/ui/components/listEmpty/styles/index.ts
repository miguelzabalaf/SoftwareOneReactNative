import { ScaledSheet, moderateScale } from 'react-native-size-matters';

export function listEmptyStyles() {
  return ScaledSheet.create({
    containerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: moderateScale(150),
    },
    containerLoadingStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      height: moderateScale(300),
    },
    containerButtonStyle: {
      width: moderateScale(75),
      height: moderateScale(50),
    }
  });
}
