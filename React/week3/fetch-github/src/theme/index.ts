import * as styledComponents from 'styled-components';

const {
  default: styled,
  css,
  createGlobalStyle,
  // injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

export interface IThemeInterface {
  primaryColor: string;
}

export enum IThemeColor {
  darkGreen = '#004e66',
  lightYellow = '#fcbe32',
  orange = '#ff5f2e',
  lightGrey = '#e1eef6'
}

export const theme = {
  primaryColor: '#e9e9eb'
};

export default styled;
export { css, createGlobalStyle, keyframes, ThemeProvider };
