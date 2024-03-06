import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { Box, useTheme } from "native-base";
import { AuthRoutes } from "./auth.routes";

export function Router() {
  const { colors } = useTheme();
  const theme = DefaultTheme;
  theme.colors.background = colors.gray[800];
  return (
    <Box flex={1} bg={"gray.800"}>
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
}
