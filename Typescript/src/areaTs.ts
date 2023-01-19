interface Polygon {
  kind: 'square' | 'circle';
}

interface Circle extends Polygon {
  kind: 'circle';
  radius: number;
}

interface Square extends Polygon {
  kind: 'square';
  sideLength: number;
}

type Shape = Circle | Square;

export const getArea = (shape: Shape) => {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.sideLength ** 2;
  }
};
