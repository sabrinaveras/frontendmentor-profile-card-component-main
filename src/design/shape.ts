export interface Shape {
  name: string;
  value: string;
}

type ShapeOject = { [key: string]: Shape };

export const shapes: ShapeOject = {
  smallRadius: {
    name: "Small Radius",
    value: "0.25rem",
  },
  mediumRadius: {
    name: "Small Radius",
    value: "0.5rem",
  },
  largeRadius: {
    name: "Small Radius",
    value: "0.75rem",
  },
  circleRadius: {
    name: "Circle Radius",
    value: "50%",
  },
};
