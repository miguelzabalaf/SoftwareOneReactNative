import { Colors, View } from 'react-native-ui-lib';
import { SearchBarStyles } from './styles';
import { TextInput } from 'react-native';
import ButtonIcon from '../buttonIcon';
import Icon from '../icon';
import { ForwardedRef, forwardRef } from 'react';

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
  const { containerStyle, textInputStyle, searchButton } = SearchBarStyles();

  return (
    <View style={containerStyle}>
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
    </View>
  );
}

export default forwardRef<TextInput, SearchBarProps>(SearchBar);
