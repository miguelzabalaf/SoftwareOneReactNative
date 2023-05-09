import { SvgProps } from 'react-native-svg';
import { View, Text, Colors } from 'react-native-ui-lib';
import {
  ActivityIndicator,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { buttonIconStyles } from './styles';

export interface ButtonIconProps extends TouchableOpacityProps {
  Icon: React.FC<SvgProps>;
  loading?: boolean;
  color?: string;
}

export default function ButtonIcon(props: ButtonIconProps): JSX.Element {
  const { Icon, loading, color, disabled } = props;
  const { containerStyle } = buttonIconStyles({ loading, color, disabled });
  return (
    <TouchableOpacity
      disabled={loading || props.disabled}
      activeOpacity={0.8}
      style={containerStyle}>
      {loading ? <ActivityIndicator color={Colors.white} /> : <Icon />}
    </TouchableOpacity>
  );
}
