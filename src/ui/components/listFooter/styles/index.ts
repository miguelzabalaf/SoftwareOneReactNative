// Dependencies
import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import { Colors, Spacings } from 'react-native-ui-lib';

export function listFooterStyles() {
  return ScaledSheet.create({
    containerStyle: {
      paddingVertical: Spacings.s3,
      backgroundColor: Colors.white,
    },
    buttonArrowUpStyle: {
      flex: 1,
      height: moderateScale(75),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.white,
    },
  });
}
