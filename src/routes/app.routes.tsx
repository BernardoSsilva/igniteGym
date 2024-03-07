import HistorySvg from "@assets/history.svg";
import HomeSvg from "@assets/home.svg";
import ProfileSvg from "@assets/profile.svg";
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Exercise } from "@screens/Exercise";
import { History } from "@screens/History";
import { Home } from "@screens/Home";
import { Profile } from "@screens/Profile";
import { useTheme } from "native-base";
import { Platform } from "react-native";

type AppRoutes = {
  home: undefined;
  history: undefined;
  profile: undefined;
  exercise: undefined;
};

export type appRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();
export function AppRoutes() {
  const { sizes, colors } = useTheme();
  const iconSizes = sizes[7];

  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.green[500],
        tabBarInactiveTintColor: colors.gray[200],
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.gray[700],
          borderTopWidth: 0,
          height: Platform.OS === "android" ? "auto" : 96,
          paddingBottom: sizes[10],
          paddingTop: sizes[6],
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <HomeSvg fill={color} width={iconSizes} height={iconSizes} />
            );
          },
        }}
      />

      <Screen
        name="history"
        component={History}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <HistorySvg fill={color} width={iconSizes} height={iconSizes} />
            );
          },
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <ProfileSvg fill={color} width={iconSizes} height={iconSizes} />
            );
          },
        }}
      />
      <Screen
        name="exercise"
        component={Exercise}
        options={{
          tabBarButton: () => null,
        }}
      />
    </Navigator>
  );
}
