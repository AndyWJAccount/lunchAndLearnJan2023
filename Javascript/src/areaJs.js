// shape {type, radius, or sidelength}
export const getArea = (shape) => {
  switch (shape.type) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
  }
}
