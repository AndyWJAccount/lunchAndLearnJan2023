import { getArea } from '../src/areaJs';

const PI = 3.141592653589793;

describe('Area tests', () => {
  it('should calc the area for a circle', () => {
    const area = getArea({type: 'circle', radius: 10} );
    expect(area).toBe(PI * 100);
  });

  it('should calc the area for a square', () => {
    const area = getArea({type: 'square', sideLength: 10} );
    expect(area).toBe(100);
  });

  it('should calc the area for a square error - sidelength missing', () => {
    const area = getArea({type: 'square', radius: 10} );
    expect(area).toBe(100);
  });

  it('should calc the area for a circle error - radius missing', () => {
    const area = getArea({type: 'circle', myradius: 10} );
    expect(area).toBe(PI * 100);
  });

  it('should calc the area for a triangle error', () => {
    const area = getArea({type: 'triangle', length: 10} );
    expect(area).toBe(10 * 10 / 2);
  });

  it('should calc the area error - no params', () => {
    const area = getArea();
    expect(area).toBeDefined();
  });
});
