import { ScaledSheet, moderateScale } from "react-native-size-matters";
import { Colors } from "react-native-ui-lib";
import { CountryCardProps } from "../countryCard";

interface CountryCardStylesProps extends Pick<CountryCardProps, 'loading'> { }

export function CountryCardStyles(props: CountryCardStylesProps) {
    const { loading } = props;
    return ScaledSheet.create({
        containerStyle: {
            position: 'relative',
            height: moderateScale(100),
        },
        shadowStyle: {
            backgroundColor: Colors.black,
            position: 'absolute',
            top: moderateScale(7.5),
            left: moderateScale(7.5),
            right: 0,
            bottom: 0,
        },
        contentStyle: {
            backgroundColor: Colors.white,
            position: 'absolute',
            top: 0,
            left: 0,
            right: moderateScale(7.5),
            bottom: moderateScale(7.5),
            borderWidth: moderateScale(0.25),
            borderColor: Colors.black,
            padding: moderateScale(10),
            flexDirection: 'row',
            gap: moderateScale(10)
        },
        actionContainerStyle: {
            width: moderateScale(75),
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: loading ? Colors.neutral : 'transparent',
        },
        informationContainerStyle: {
            flex: 1,
            justifyContent: 'center'
        },
    });
}