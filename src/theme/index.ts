
import lightTheme from './light'
import darkTheme from './dark'
import { ThemeColors } from './themes'
import { createTheme } from '@mui/material'

export enum THEMES {
  LIGHT = 'light',
  DARK = 'dark'
}

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions extends ThemeColors {}
}

const themeConfigs = { 
  "dark": darkTheme, 
  "light": lightTheme 
}

export interface SettingsType {
  theme: THEMES
}

const MuiTheme = (settings: SettingsType) => {
  console.log('MuiTheme', settings)
  const themeConfig = themeConfigs[settings.theme]
  return createTheme({
    ...themeConfig
  })
}

export default MuiTheme
