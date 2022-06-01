import React from 'react';
import {Meta , Story} from '@storybook/react';
import IconComponent from '.';

import { ThemeProvider } from '@mui/material/styles'
import CustomTheme from "../../../themes";


import SearchIcon from '@mui/icons-material/Search';
import RocketIcon from '@mui/icons-material/Rocket';

const meta: Meta = {
  title: 'Atoms/Icon',
  component: IconComponent
}

export default meta;

export const icon = () =>
  <ThemeProvider theme={CustomTheme}>
      <IconComponent icon={<SearchIcon htmlColor='black' />} title={''} titleColor={''} onClick={() => {}} />
  </ThemeProvider>

export const iconWithTitle = () =>
<ThemeProvider theme={CustomTheme}>
<IconComponent icon={<RocketIcon  htmlColor='black' />} title={'Entrepreneurship'} titleColor={''} onClick={() => {}} />
</ThemeProvider>

export const iconWithTitleOnHover = () =>
<ThemeProvider theme={CustomTheme}>
<IconComponent icon={<RocketIcon  color='secondary' />} title={'Entrepreneurship'} titleColor={'secondary'} onClick={() => {}} />
</ThemeProvider>