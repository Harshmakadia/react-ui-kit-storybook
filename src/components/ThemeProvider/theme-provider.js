import React from 'react';
import PropTypes, {
  node, oneOfType, arrayOf,
} from 'prop-types';

import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '../../themes';

const UiKitThemeProvider = ({ theme, children }) => (
  <ThemeProvider theme={theme}>
    <div>{children}</div>
  </ThemeProvider>
);

UiKitThemeProvider.propTypes = {
  theme: PropTypes.objectOf(PropTypes.object),
  children: oneOfType([arrayOf(node), node]),
};

UiKitThemeProvider.defaultProps = {
  theme: defaultTheme,
  children: null,
};

export default UiKitThemeProvider;
