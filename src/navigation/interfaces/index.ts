import { NavigationComponentProps, Options } from 'react-native-navigation';

export interface Screens {
  [key: string]: {
    component: (props: any) => JSX.Element;
    name: string;
  };
}

export interface ScreenProps extends NavigationComponentProps {}

export interface NavigateToProps {
  screenName: string;
  componentId: string;
  props?: { [key: string]: any };
  options?: Options;
}

export interface PopProps extends NavigationComponentProps {}
