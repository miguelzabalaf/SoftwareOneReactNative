import React from 'react';
import { Path, Svg, SvgProps } from 'react-native-svg';
import { Colors } from 'react-native-ui-lib';

export function Layout(props: SvgProps): JSX.Element {
  const { color, style, scale = 1 } = props;
  return (
    <Svg
      width={35 * Number(scale)}
      height={35 * Number(scale)}
      viewBox="0 0 16 16"
      fill="none"
      style={style}>
      <Path
        d="M5 1V9H1L1 1H5ZM1 0C0.447715 0 0 0.447716 0 1V9C0 9.55229 0.447715 10 1 10H5C5.55228 10 6 9.55228 6 9V1C6 0.447715 5.55228 0 5 0H1Z"
        fill={color ?? Colors.black}
      />
      <Path
        d="M14 2V7H9V2H14ZM9 1C8.44772 1 8 1.44772 8 2V7C8 7.55228 8.44772 8 9 8H14C14.5523 8 15 7.55228 15 7V2C15 1.44772 14.5523 1 14 1H9Z"
        fill={color ?? Colors.black}
      />
      <Path
        d="M5 13V15H3V13H5ZM3 12C2.44772 12 2 12.4477 2 13V15C2 15.5523 2.44772 16 3 16H5C5.55228 16 6 15.5523 6 15V13C6 12.4477 5.55228 12 5 12H3Z"
        fill={color ?? Colors.black}
      />
      <Path
        d="M15 11V13H9V11H15ZM9 10C8.44772 10 8 10.4477 8 11V13C8 13.5523 8.44772 14 9 14H15C15.5523 14 16 13.5523 16 13V11C16 10.4477 15.5523 10 15 10H9Z"
        fill={color ?? Colors.black}
      />
    </Svg>
  );
}
