import React from 'react';
import { Colors, View, Spacings } from 'react-native-ui-lib';
import { moderateScale } from 'react-native-size-matters';

export enum SkeletonSize {
  Small = 10,
  Medium = 16,
  Large = 24,
}

export interface SkeletonProps {
  width: string | number;
  size: SkeletonSize;
}

export function Text(props: SkeletonProps): JSX.Element {
  const { width, size } = props;
  return (
    <View>
      <View
        backgroundColor={Colors.neutral}
        height={moderateScale(size)}
        width={width}
      />
      <View height={Spacings.s1} />
    </View>
  );
}
