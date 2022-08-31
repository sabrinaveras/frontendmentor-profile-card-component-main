export interface Color {
  name: string;
  color: string;
}

type ColorObject = { [key: string]: Color };

export const colors: ColorObject = {
  darkCyan: {
    name: "Dark Cyan",
    color: "hsl(185, 75%, 39%)",
  },
  veryDarkDesaturatedBlue: {
    name: "Very dark desaturated blue",
    color: "hsl(229, 23%, 23%)",
  },
  darkGrayishBlue: {
    name: "Dark grayish blue",
    color: "hsl(227, 10%, 46%)",
  },
  darkGray: {
    name: "Dark Gray",
    color: "hsl(0, 0%, 59%)",
  },
  white: {
    name: "White",
    color: "hsl(0, 100%, 100%)",
  },
};
