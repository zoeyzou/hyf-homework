import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

export enum themeColor {
  lightBlue = '#E0EFF1',
  blue = '#7DB4B5',
  purple = '#680148',
  grey = '#707070',
  lightGrey = '#B8B8B8',
  black = '#000',
  white = '#fff'
}

export enum themeFont {
  text = "'Raleway', sans-serif",
  title = "'Spicy Rice', cursive;"
}

export enum breakpoint {
  mobile = '480px',
  web = '768px'
}

export interface IThemeInterface {
  primaryColor: themeColor;
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<IThemeInterface>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
