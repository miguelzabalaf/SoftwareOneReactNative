// Views
import viewsName from '../../navigation/constants/viewsNames';
import CountriesView from './countries';
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
    name: viewsName.countries,
    component: CountriesView,
  },
};

export default views;
