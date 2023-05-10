import { ScaledSheet, moderateScale } from "react-native-size-matters";
import { Colors } from "react-native-ui-lib";
import { fonts } from "../../../constants/fonts";

export function SearchBarStyles() {
    return ScaledSheet.create({
        containerStyle: {
            height: moderateScale(50),
            flexDirection: 'row',
            alignItems: 'center',
            gap: moderateScale(10),
            backgroundColor: Colors.white
        },
        textInputStyle: {
            height: '100%',
            flex: 1,
            fontFamily: fonts.regular,
        },
        searchButton: {
            width: moderateScale(35),
            height: moderateScale(35),
        }
    });
}