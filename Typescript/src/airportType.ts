interface Airport {
  code: string;
  cityCode: string;
  timezone: string;
  latitude: number;
  faaCode: string;
  icaoCode: string;
  marketingOrder: number;
  countryCode: string;
  provinceStateCode: string;
  elevationFeet: number,
  longitude: number,
  provinceStateName: string;
  airportName: string;
  displayName: string;
  name: string;
  marketingRegion: string;
  countryName: string;
  displayRegion: string;
}

export interface Airports {
  airports: Airport[];
}
