import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import ConfigButtom from '../components/ConfigButton';
import Home from "../screens/tabs/Home/index";
import Favorite from '../screens/tabs/Favorites';
import { FONT } from '../constants/fonts/font';

const { Navigator, Screen } = createBottomTabNavigator()

export function TabRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerTitleAlign: 'left',
        headerTitle: "WeFit",
        tabBarLabelStyle: {
          fontFamily: FONT.FONT_FAMILY.ROBOTO_Medium
        },
        headerRight: (props) => (
          <ConfigButtom />
        )
      }}
    >
      <Screen
        name="Repository"
        component={Home}
        options={{
          tabBarLabel: "Repositórios",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="github" color={color} size={size} />
          )
        }}
      />
      <Screen
        name="Favorites"
        component={Favorite}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="star" color={color} size={size} />
          )
        }}
      />
    </Navigator>
  )
}