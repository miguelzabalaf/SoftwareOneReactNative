enum Montserrat {
  Regular = 'Montserrat-Regular',
  Bold = 'Montserrat-Bold',
  Black = 'Montserrat-Black',
}

interface Fonts {
  [key: string]: Montserrat;
}

export const fonts: Fonts = {
  regular: Montserrat.Regular,
  bold: Montserrat.Bold,
  black: Montserrat.Black,
};
