import React from 'react';
import {Meta} from '@storybook/react';
import AppBarComponent from '.';

import { ThemeProvider } from '@mui/material/styles'
import CustomTheme from "../../../themes";
import SearchIcon from '@mui/icons-material/Search';

const meta: Meta = {
  title: 'Organisms/AppBar',
  component: AppBarComponent
}

export default meta;

export const appBar = () =>
  <ThemeProvider theme={CustomTheme}>
      <AppBarComponent />
  </ThemeProvider>