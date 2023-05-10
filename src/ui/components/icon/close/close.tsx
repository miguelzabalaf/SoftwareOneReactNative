import React from 'react';
import { Svg, Path, SvgProps } from 'react-native-svg';
import { Colors } from 'react-native-ui-lib';

export function Close(props: SvgProps): JSX.Element {
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
        d="M2.14645 2.85355C1.95118 2.65829 1.95118 2.34171 2.14645 2.14645C2.34171 1.95118 2.65829 1.95118 2.85355 2.14645L8 7.29289L13.1464 2.14645C13.3417 1.95118 13.6583 1.95118 13.8536 2.14645C14.0488 2.34171 14.0488 2.65829 13.8536 2.85355L8.70711 8L13.8536 13.1464C14.0488 13.3417 14.0488 13.6583 13.8536 13.8536C13.6583 14.0488 13.3417 14.0488 13.1464 13.8536L8 8.70711L2.85355 13.8536C2.65829 14.0488 2.34171 14.0488 2.14645 13.8536C1.95119 13.6583 1.95119 13.3417 2.14645 13.1464L7.29289 8L2.14645 2.85355Z"
        fill={color ?? Colors.black}
      />
    </Svg>
  );
}
