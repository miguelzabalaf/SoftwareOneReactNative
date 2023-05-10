// Dependencies
import { Linking, Platform } from 'react-native';

export function isIOS() {
  return Platform.OS === 'ios';
}

export function goToByLatLong({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) {
  if (isIOS()) {
    Linking.openURL(
      `http://maps.apple.com/?daddr=${ latitude },${ (longitude) }`,
    );
  } else {
    Linking.openURL(
      `https://www.google.com/maps/dir//${ latitude },${ longitude }`,
    );
  }
};