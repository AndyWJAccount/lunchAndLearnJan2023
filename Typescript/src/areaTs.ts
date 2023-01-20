type PolygonType = 'square' | 'circle';

interface Polygon {
  type: PolygonType;
}

interface Circle extends Polygon {
  type: 'circle';
  radius: number;
}

interface Square extends Polygon {
  type: 'square';
  sideLength: number;
}

type Shape = Circle | Square;

// --------------------------------------------

export const getArea = (shape: Shape) => {
  switch (shape.type) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.sideLength ** 2;
  }
};







// --------------------------------------------

export type Operation<CalculateResponse> = {
  type: 'AreaCircle' | 'AreaSquare',
  calculate: (value: number) => CalculateResponse
};

export const getArea2 = <CalculateResponse>(value: number, op: Operation<CalculateResponse>) => {
  return op.calculate(value);
};


