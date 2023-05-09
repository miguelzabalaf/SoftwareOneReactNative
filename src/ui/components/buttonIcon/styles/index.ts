import { ScaledSheet, moderateScale } from "react-native-size-matters";
import { Colors } from "react-native-ui-lib";
import { ButtonIconProps } from "../buttonIcon";

interface ButtonIconStylesProps extends Pick<ButtonIconProps, 'loading' | 'color' | 'disabled'> { }

export function buttonIconStyles(props: ButtonIconStylesProps) {
    const { loading, color, disabled } = props;
    return ScaledSheet.create({
        containerStyle: {
            width: '100%',
            height: '100%',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: moderateScale(5),
            backgroundColor: loading || disabled ? Colors.neutral : color ?? Colors.primary
        }
    });
}