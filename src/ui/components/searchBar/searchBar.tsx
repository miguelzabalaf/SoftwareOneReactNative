import { Colors, Text, View } from 'react-native-ui-lib';
import { offlineModeStyles, searchBarStyles } from './styles';
import { TextInput } from 'react-native';
import ButtonIcon from '../buttonIcon';
import Icon from '../icon';
import { ForwardedRef, forwardRef } from 'react';
import { useConnected } from '../../controllers/useConnected';
import labels from '../../../strings/labels';

export interface SearchBarProps {
  value: string;
  onChangeValue: (value: string) => void;
  loading?: boolean;
  placeholder?: string;
  hasValue?: boolean;
  onPressButton?: () => void;
}

function SearchBar(
  props: SearchBarProps,
  ref: ForwardedRef<TextInput>,
): JSX.Element {
  const {
    value,
    onChangeValue,
    loading,
    placeholder,
    hasValue,
    onPressButton,
  } = props;
  const { containerStyle, textInputStyle, searchButton } = searchBarStyles();
  const { containerOffLineStyle, textOffLineStyle } = offlineModeStyles();
  const { isConnected } = useConnected();
  return (
    <View style={containerStyle}>
      {isConnected && (
        <>
          <TextInput
            ref={ref}
            style={textInputStyle}
            placeholder={placeholder}
            placeholderTextColor={Colors.muted}
            value={value}
            onChange={event => onChangeValue(event.nativeEvent.text)}
          />
          <View style={searchButton}>
            <ButtonIcon
              loading={loading}
              color={Colors.primary}
              onPress={onPressButton}
              Icon={() =>
                hasValue
                  ? Icon.Close({ color: Colors.white })
                  : Icon.Search({ color: Colors.white })
              }
            />
          </View>
        </>
      )}
      {!isConnected && (
        <View style={containerOffLineStyle}>
          <Text style={textOffLineStyle} regular h3 muted center>
            {labels.errors.youAreInOfflineMode}
          </Text>
          <Icon.WiffiOff scale={0.5} color={Colors.muted} />
        </View>
      )}
    </View>
  );
}

export default forwardRef<TextInput, SearchBarProps>(SearchBar);
