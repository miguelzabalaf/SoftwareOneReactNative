// Dependencies
import { Colors, Typography } from 'react-native-ui-lib';

// Constants
import { colors } from '../constants/colors';
import { typography } from '../constants/typography';

// Methods
export function presetStyles(): void {
  Colors.loadColors(colors);
  Typography.loadTypographies(typography);
}
