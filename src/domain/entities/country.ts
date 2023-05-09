interface NativeName {
  official: string;
  common: string;
}
interface Name {
  common: string;
  official: string;
  nativeName: { [key: string]: NativeName };
}

export enum Region {
  Africa = 'Africa',
  Americas = 'Americas',
  Antarctic = 'Antarctic',
  Asia = 'Asia',
  Europe = 'Europe',
  Oceania = 'Oceania',
}

export interface Country {
  name: Name;
  capital: string[];
  region: Region;
  latlng: number[];
}
