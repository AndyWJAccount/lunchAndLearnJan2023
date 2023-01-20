import {get} from '../src/getTs';
import {Airports} from '../src/airportType';

describe('Get tests', () => {
  it('should call the airports api and get a response', async () => {
    const response = await get<Airports>('https://api.westjet.com/destination-service/v1/en-CA/airports');
    console.log(response);
    expect(response).toBeDefined();
  });

  it('should be able to find the long/lat of Yellowknife', async () => {
    const response = await get<Airports>('https://api.westjet.com/destination-service/v1/en-CA/airports');
    const yellowknife = response.airports.find(airport => airport.name === 'Yellowknife');

    // One of those odd TS compiler issues.
    // We know 100% that yellowknife is defined, but the compiler doesn't recognize it.
    expect(yellowknife).toBeDefined();
    expect(yellowknife.latitude).toBe(62.470869);
    expect(yellowknife.longitude).toBe(-114.4375);
  });

  it('should be able to find the long/lat of Yellowknife error - airports ', async () => {
    const response = await get<Airports>('https://api.westjet.com/destination-service/v1/en-CA/airports');
    const yellowknife = response.find(airport => airport.name === 'Yellowknife');
    expect(yellowknife).toBeDefined();
    expect(yellowknife.latitude).toBe(62.470869);
    expect(yellowknife.longitude).toBe(-114.4375);
  });

  it('should be able to find the long/lat of Yellowknife error - airport name ', async () => {
    const response = await get<Airports>('https://api.westjet.com/destination-service/v1/en-CA/airports');
    const yellowknife = response.airports.find(airport => airport.Name === 'Yellowknife');
    expect(yellowknife).toBeDefined();
    expect(yellowknife.latitude).toBe(62.470869);
    expect(yellowknife.longitude).toBe(-114.4375);
  });

  it('should be able to find the long/lat of Yellowknife error - latitude ', async () => {
    const response = await get('https://api.westjet.com/destination-service/v1/en-CA/airports');
    const yellowknife = response.airports.find(airport => airport.name === 'Yellowknife');
    expect(yellowknife).toBeDefined();
    expect(yellowknife.lat).toBe(62.470869);
  });

});

