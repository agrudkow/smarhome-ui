import React, { ReactElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { BaseTheme } from './base-theme';

/**
 * A custom render with provided theme. Extends regular
 * render options with `theme` to allow injecting
 * default theme for styled-components components.
 *
 * @see https://testing-library.com/docs/react-testing-library/setup#custom-render
 */
export const customRender: (
  ui: ReactElement,
  options?: RenderOptions
) => RenderResult = (ui, options) => {
  return render(<ThemeProvider theme={BaseTheme}>{ui}</ThemeProvider>, options);
};
