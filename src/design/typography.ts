import styled, { StyledComponent } from "styled-components";

export interface Typography {
  name: string;
  component: StyledComponent<any, any, {}, never>;
}

type TypographyObject = { [key: string]: Typography };

export const typographies: TypographyObject = {
  title: {
    name: "Title",
    component: styled.span`
      font-family: "Kumbh Sans", sans-serif;
      font-weight: 300;
      font-size: 6rem;
      line-height: 1.167;
      letter-spacing: -0.01562rem;
      margin: 0;
    `,
  },
  body1: {
    name: "Body 1",
    component: styled.span`
      font-family: "Kumbh Sans", sans-serif;
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.5;
      letter-spacing: 0.00938rem;
      margin: 0;
    `,
  },
  subtitle2: {
    name: "SubTitle 2",
    component: styled.span`
      font-family: "Kumbh Sans", sans-serif;
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 1.57;
      letter-spacing: 0.00714rem;
      margin: 0;
    `,
  },
};
