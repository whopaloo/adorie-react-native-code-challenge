import * as styledComponents from 'styled-components/native';

import {myTheme} from './my-theme';

const {
  default: styled,
  css,
  ThemeProvider,
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<
  typeof myTheme
>;

export {css, ThemeProvider};
export default styled;
