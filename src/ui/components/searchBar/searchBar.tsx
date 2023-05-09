import { Colors, View } from 'react-native-ui-lib';
import { SearchBarStyles } from './styles';
import { TextInput } from 'react-native';
import { useState } from 'react';
import ButtonIcon from '../buttonIcon';
import Icon from '../icon';

export default function SearchBar(): JSX.Element {
  const { containerStyle, textInputStyle, searchButton } = SearchBarStyles();
  const [textValue, setTextValue] = useState('');
  return (
    <View style={containerStyle}>
      <TextInput
        style={textInputStyle}
        placeholder="Find your country here"
        placeholderTextColor={Colors.muted}
        value={textValue}
        onChange={event => setTextValue(event.nativeEvent.text)}
      />
      <View style={searchButton}>
        <ButtonIcon
          color={Colors.primary}
          Icon={() => Icon.Search({ scale: 1, color: Colors.white })}
        />
      </View>
    </View>
  );
}
