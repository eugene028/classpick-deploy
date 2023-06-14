import { css } from "styled-components";

export const calcRem = (px: number) => `${px / 16}rem`;

export const typo = {
  Headline2: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(24)};
    line-height: 140%;
    font-weight: 700;
  `,
  Headline1: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(20)};
    line-height: 140%;
    font-weight: 600;
  `,
  Subtitle3: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(18)};
    line-height: 140%;
    font-weight: 600;
  `,
  Subtitle2: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(16)};
    line-height: 140%;
    font-weight: 600;
  `,
  Subtitle1: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(14)};
    line-height: 140%;
    font-weight: 600;
  `,
  Subtitle1_1: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(14)};
    line-height: 160%;
    font-weight: 600;
    text-decoration: underline;
`,
  Body2_2: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(16)};
    line-height: 160%;
    font-weight: 500;
  `,
  Body2_1: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(16)};
    line-height: 160%;
    font-weight: 400;
  `,
  Body1_2: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(14)};
    line-height: 160%;
    font-weight: 500;
  `,
  Body1_1: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(14)};
    line-height: 160%;
    font-weight: 400;
  `,
  Caption3_3: css`
   font-family: 'Pretendard';
   font-size: ${calcRem(12)};
   line-height: 160%;
   font-weight: 600;   
 `,
  Caption3_2: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(12)};
    line-height: 160%;
    font-weight: 500;   
  `,
  Caption3_2_1: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(12)};
    line-height: 160%;
    font-weight: 500;  
    text-decoration: underline; 
  `,
  Caption3_1: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(12)};
    line-height: 160%;
    font-weight: 400;   
  `,
  Caption2_1: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(10)};
    line-height: 160%;
    font-weight: 400;   
  `,
  Caption1: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(8)};
    line-height: 160%;
    font-weight: 400;   
  `,
} as const;
