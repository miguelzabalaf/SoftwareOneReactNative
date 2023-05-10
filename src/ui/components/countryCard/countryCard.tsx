import { View, Text, Spacings, Colors } from 'react-native-ui-lib';
import { CountryCardStyles } from './styles';
import { Country } from '../../../domain/entities/country';
import { Sekeleton } from '../skeleton';
import ButtonIcon from '../buttonIcon';
import Icon from '../icon';

export interface CountryCardProps {
  country?: Country;
  loading?: boolean;
  onPressGoToMap?: () => void;
}

export default function CountryCard(props: CountryCardProps): JSX.Element {
  const { country, loading, onPressGoToMap } = props;
  const {
    containerStyle,
    shadowStyle,
    contentStyle,
    actionContainerStyle,
    informationContainerStyle,
  } = CountryCardStyles({ loading });
  return (
    <View style={containerStyle}>
      <View style={shadowStyle}></View>
      <View style={contentStyle}>
        <View style={actionContainerStyle}>
          <ButtonIcon
            onPress={onPressGoToMap}
            loading={loading}
            Icon={() => Icon.PinMap({ color: Colors.white, scale: 1.5 })}
          />
        </View>
        <View style={informationContainerStyle}>
          {loading ? (
            <Sekeleton.Text
              width={`${Math.floor(Math.random() * 71) + 30}%`}
              size={Sekeleton.SkeletonSize.Large}
            />
          ) : (
            <Text h1 extraBold primary numberOfLines={1}>
              {country?.name?.common}
            </Text>
          )}
          {loading ? (
            <>
              <View height={Spacings.s1} />
              <Sekeleton.Text
                width={125}
                size={Sekeleton.SkeletonSize.Medium}
              />
            </>
          ) : (
            <Text h2 regular primary numberOfLines={1}>
              {country?.capital}
            </Text>
          )}

          <View height={Spacings.s1} />
          {loading ? (
            <Sekeleton.Text width={75} size={Sekeleton.SkeletonSize.Small} />
          ) : (
            <Text p regular muted numberOfLines={1}>
              {country?.region}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
}
