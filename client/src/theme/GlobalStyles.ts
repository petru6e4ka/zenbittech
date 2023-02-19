import {
  DefaultTheme,
  GlobalStyleComponent,
  createGlobalStyle,
  css,
} from "styled-components";
import theme from "./theme";
import ApercuArabicPro from "../assets/fonts/ApercuArabicProRegular.ttf";
import ApercuArabicPro2 from "../assets/fonts/ApercuArabicProRegular.eot";
import ApercuArabicPro3 from "../assets/fonts/ApercuArabicProRegular.woff";
import ApercuArabicPro4 from "../assets/fonts/ApercuArabicProRegular.woff2";

export const bodyStyles = css`
  font-family: "ApercuArabicPro", sans-serif;
  font-size: 18px;
  margin: 0;
`;

const GlobalStyle: GlobalStyleComponent<
  MyProps,
  DefaultTheme
> = createGlobalStyle`
  :root {
    ${({ theme }) => css`
      --text: ${theme.colors.text};
      --background: ${theme.colors.background};
      --black: ${theme.colors.black};
      --white: ${theme.colors.white};
      --CTA: ${theme.colors.CTA};
      --background_footer: ${theme.colors.background_footer};
      --border_footer: ${theme.colors.border_footer};
      --border_input: ${theme.colors.border_input};
    `}
  }

  @font-face {
    font-family: 'ApercuArabicPro';
    font-style: normal;
    src: local('ApercuArabicPro'),
    url(${ApercuArabicPro}) format('ttf');
  }
  @font-face {
    font-family: 'ApercuArabicPro';
    font-style: normal;
    src: local('ApercuArabicPro'),
    url(${ApercuArabicPro2}) format('eot');
  }
  @font-face {
    font-family: 'ApercuArabicPro';
    font-style: normal;
    src: local('ApercuArabicPro'),
    url(${ApercuArabicPro3}) format('woff');
  }
  @font-face {
    font-family: 'ApercuArabicPro';
    font-style: normal;
    src: local('ApercuArabicPro'),
    url(${ApercuArabicPro4}) format('woff2');
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    ${bodyStyles}
  }
`;

export interface MyProps {
  theme: typeof theme;
}

export default GlobalStyle;
