import { TextStyle } from 'react-native/types';
import { fonts } from './fonts';
import { isIOS } from '../helpers/quickFunctions';

interface Typography {
  [key: string]: TextStyle;
}

export const typography: Typography = {
  big: {
    fontSize: isIOS() ? 36 : 30,
  },
  h1: {
    fontSize: isIOS() ? 26 : 24,
  },
  h2: {
    fontSize: isIOS() ? 20 : 18,
  },
  h3: {
    fontSize: isIOS() ? 16 : 14,
  },
  p: {
    fontSize: isIOS() ? 14 : 12,
  },
  small: {
    fontSize: isIOS() ? 12 : 10,
  },
  regular: {
    fontFamily: fonts.regular,
  },
  bold: {
    fontFamily: fonts.bold,
  },
  extraBold: {
    fontFamily: fonts.black,
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  lowercase: {
    textTransform: 'lowercase',
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  left: {
    textAlign: 'left',
  },
  justify: {
    textAlign: 'justify',
  },
};
