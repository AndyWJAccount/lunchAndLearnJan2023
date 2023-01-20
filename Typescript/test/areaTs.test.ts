import {getArea, getArea2, Operation} from '../src/areaTs';

const PI = 3.141592653589793;

describe('Area tests', () => {
  it('should calc the area for a circle', () => {
    const area = getArea({kind: 'circle', radius: 10} );
    expect(area).toBe(PI * 100);
  });

  it('should calc the area for a square', () => {
    const area = getArea({kind: 'square', sideLength: 10} );
    expect(area).toBe(100);
  });

  it('should calc the area for a square error - sidelength missing', () => {
    const area = getArea({kind: 'square', radius: 10} );
    expect(area).toBe(100);
  });

  it('should calc the area for a circle error - radius missing', () => {
    const area = getArea({kind: 'circle', myradius: 10} );
    expect(area).toBe(PI * 100);
  });

  it('should calc the area for a triangle error', () => {
    const area = getArea({kind: 'triangle', length: 10} );
    expect(area).toBe(10 * 10 / 2);
  });

  it('should calc the area error - no params', () => {
    const area = getArea();
    expect(area).toBeDefined();
  });
});


describe('Area 2 Tests', () => {
  it('should calc the area for a circle - returns a number', () => {
    const operation: Operation<number> = {
      type: 'AreaCircle',
      calculate: (value: number) => {
        return Math.PI * value ** 2;
      }
    }

    const area = getArea2(10, operation);
    expect(area).toBe(PI * 100);
  });

  it('should calc the area for a square - returns a string', () => {
    const operation: Operation<string> = {
      type: 'AreaSquare',
      calculate: (value: number) => {
        return String(value ** 2);
      }
    }

    const area = getArea2(10, operation);
    expect(area).toBe('100');
  });
});
