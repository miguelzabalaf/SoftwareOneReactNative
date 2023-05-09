// Views
import viewsName from '../../navigation/constants/viewsNames';
import CitiesView from './cities';
import SplashView from './splash';

interface Views {
  [key: string]: {
    name: string;
    component: (props: any) => JSX.Element;
  };
}

const views: Views = {
  splash: {
    name: viewsName.splash,
    component: SplashView,
  },
  cities: {
    name: viewsName.cities,
    component: CitiesView,
  },
};

export default views;
