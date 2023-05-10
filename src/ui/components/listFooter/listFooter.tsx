// Dependencies
import React from 'react';

// Components
import { View, Colors, Text, Spacings } from 'react-native-ui-lib';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import Icon from '../icon';

// Styles
import { listFooterStyles } from './styles';
import labels from '../../../strings/labels';

// Strings

export interface ListFooterProps {
  allDataRendered: boolean;
  goToTop: () => void;
  showGotoTopButton: boolean;
}

export function ListFooter(props: ListFooterProps): JSX.Element {
  const { allDataRendered, goToTop, showGotoTopButton } = props;
  const { containerStyle, buttonArrowUpStyle } = listFooterStyles();
  return (
    <View style={containerStyle}>
      {allDataRendered ? (
        <View>
          <Text muted center>
            {labels.text.youHaveReachedTheEndOfTheList}
          </Text>
          <View height={Spacings.s3} />
          {showGotoTopButton && (
            <TouchableOpacity activeOpacity={0.9} onPress={goToTop}>
              <View style={buttonArrowUpStyle}>
                <Icon.ArrowUp scale={2} color={Colors.primary} />
              </View>
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <ActivityIndicator size={35} color={Colors.muted} />
      )}
    </View>
  );
}
