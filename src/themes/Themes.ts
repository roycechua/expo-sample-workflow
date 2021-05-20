import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

// TODO: Figure out how to integrate multiple themes
// App will have one central theme for now
export const defaultTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      accent: 'yellow',
    },
};