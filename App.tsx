import { StatusBar } from 'expo-status-bar';
import { LogBox } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import UserBottomSheetContextProvider from './app/context/UserBottomSheetContext';
import UserContextProvider from './app/context/UserContext';
import Routes from './app/routes';
import colors from './app/constants/colors/colors';

import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold
} from '@expo-google-fonts/inter'

import {
  Roboto_500Medium,
  Roboto_400Regular
} from '@expo-google-fonts/roboto'

export default function App() {
  LogBox.ignoreAllLogs()

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Roboto_500Medium,
    Roboto_400Regular
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <UserContextProvider>
      <UserBottomSheetContextProvider>
        <ThemeProvider theme={colors}>
          <StatusBar
            backgroundColor="transparent"
            translucent
          />
          <Routes />
        </ThemeProvider>
      </UserBottomSheetContextProvider>
    </UserContextProvider>
  );
}