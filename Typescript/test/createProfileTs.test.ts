import {createProfile} from 'src/createProfileTs';

describe('Create Profile', () => {
  it('should handle valid string params - string', () => {
    const profile = createProfile('Andy', '2000-11-30', 'Canada');
    expect(profile).toBeDefined();
    expect(profile.dateOfBirth).toEqual('30-11-2000');
    expect(profile.age).toEqual(22);
  });

  it('should handle valid string params - object', () => {
    const profile = createProfile('Andy', {year: 2000, month: 11, day: 30}, 'Canada');
    expect(profile).toBeDefined();
    expect(profile.dateOfBirth).toEqual('30-11-2000');
    expect(profile.age).toEqual(22);
  });

  it('will fail with bad data params - dob obj', () => {
    const profile = createProfile('Andy', {date: '2000-11-30'}, 'Mexico');
    expect(profile).toBeDefined();
    expect(profile.dateOfBirth).toEqual('30-11-2000');
    expect(profile.age).toEqual(22);
  });

  it('will fail with bad data params - dob string', () => {
    const profile = createProfile('Andy', 'Nov 30, 2000', 'Mexico');
    expect(profile).toBeDefined();
    expect(profile.dateOfBirth).toEqual('30-11-2000');
    expect(profile.age).toEqual(22);
  });

  it('will fail with bad data params - country', () => {
    const profile = createProfile('Andy', {year: 2000, month: 11, day: 30}, 'Mexico');
    expect(profile).toBeDefined();
    expect(profile.dateOfBirth).toEqual('30-11-2000');
    expect(profile.age).toEqual(22);
  });
});




