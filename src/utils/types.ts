import * as React from 'react';
import { ThemeOptions } from '@material-ui/core/styles';
import {
  PaletteColor,
  PaletteOptions,
} from '@material-ui/core/styles/createPalette';
import { Spacing } from '@material-ui/core/styles/createSpacing';
import { TypographyOptions } from '@material-ui/core/styles/createTypography';

import { IconProps } from 'react-feather';
import { Omit } from '@material-ui/core';
export type TUserRole = 'admin' | 'superuser' | 'oper' | undefined;

export interface ITheme extends Omit<ThemeOptions, 'spacing'> {
  palette: IPalette;
  typography?: TypographyOptions;
  spacing?: iSpacing;
}

export interface iSpacing extends Spacing {}

export type ISpacingOptions =
  | number
  | ((factor: number) => string | number)
  | number[];

export interface IPalette extends PaletteOptions {
  primary?: IPaletteColor;
  secondary?: IPaletteColor;
  error?: IPaletteColor;
  warning?: IPaletteColor;
  info?: IPaletteColor;
  success?: IPaletteColor;
}

export interface IPaletteColor extends PaletteColor {
  lightBg?: string;
}

export type ISideBarLink = {
  title: string;
  href: string;
  icon: React.FunctionComponent<IconProps>;
};
