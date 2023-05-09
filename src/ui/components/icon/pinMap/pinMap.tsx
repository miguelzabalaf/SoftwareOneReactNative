import React from 'react';
import { Svg, Path, SvgProps } from 'react-native-svg';
import { Colors } from 'react-native-ui-lib';

export function PinMap(props: SvgProps): JSX.Element {
  const { style, scale = 1, color } = props;
  return (
    <Svg
      {...props}
      width={16 * Number(scale)}
      height={16 * Number(scale)}
      viewBox="0 0 16 16"
      fill="none"
      style={style}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.1 11.2C3.19443 11.0741 3.34262 11 3.5 11H6C6.27615 11 6.5 11.2239 6.5 11.5C6.5 11.7761 6.27615 12 6 12H3.75L1.5 15H14.5L12.25 12H10C9.72386 12 9.5 11.7761 9.5 11.5C9.5 11.2239 9.72386 11 10 11H12.5C12.6574 11 12.8056 11.0741 12.9 11.2L15.9 15.2C16.0136 15.3515 16.0319 15.5542 15.9472 15.7236C15.8625 15.893 15.6894 16 15.5 16H0.500003C0.310617 16 0.137485 15.893 0.0527893 15.7236C-0.0319067 15.5542 -0.0136288 15.3515 0.100003 15.2L3.1 11.2Z"
        fill={color ?? Colors.black}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7C9.65686 7 11 5.65685 11 4C11 2.34315 9.65686 1 8 1ZM4 4C4 1.79086 5.79086 0 8 0C10.2091 0 12 1.79086 12 4C12 6.03981 10.4732 7.723 8.5 7.96905V13.5C8.5 13.7761 8.27615 14 8 14C7.72386 14 7.5 13.7761 7.5 13.5V7.96905C5.52685 7.723 4 6.03981 4 4Z"
        fill={color ?? Colors.black}
      />
    </Svg>
  );
}
