import { ScaledSheet, moderateScale } from "react-native-size-matters";
import { Colors } from "react-native-ui-lib";
import { fonts } from "../../../constants/fonts";

export function SearchBarStyles() {
    return ScaledSheet.create({
        containerStyle: {
            borderBottomColor: Colors.neutral,
            borderBottomWidth: moderateScale(0.25),
            height: moderateScale(50),
            paddingHorizontal: moderateScale(10),
            flexDirection: 'row',
            alignItems: 'center',
            gap: moderateScale(10),
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