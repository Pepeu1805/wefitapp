import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { UserBottomSheetContext } from "../context/UserBottomSheetContext";
import Details from "../screens/stack/Details";
import { TabRoutes } from "./tab.routes";
import { Platform } from 'react-native';
import { FONT } from "../constants/fonts/font";

const { Navigator, Screen } = createNativeStackNavigator()

export function StackRoutes() {
  const { UserBottomSheet } = useContext(UserBottomSheetContext)

  return (<>
    <Navigator
      screenOptions={{
        headerTintColor: "white",
        headerTitleAlign: 'left',
        headerBackTitle: "Detalhes",
        headerTitleStyle: {
          fontFamily: FONT.FONT_FAMILY.ROBOTO_Medium
        },
        headerStyle: {
          backgroundColor: "black",
        },

      }}>

      <Screen
        name="index"
        options={{
          headerShown: false
        }}
        component={TabRoutes}
      />

      <Screen
        name="Details"
        options={{
          title: (Platform.OS === 'android') ? "Detalhes" : ""
        }}
        component={Details}
      />
    </Navigator>
    <UserBottomSheet />
  </>
  )
}