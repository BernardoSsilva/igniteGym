import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { Box, View, useTheme } from "native-base";
import { background } from "native-base/lib/typescript/theme/styled-system";

export function Router() {
  const { colors } = useTheme();
  const theme = DefaultTheme;
  theme.colors.background = colors.gray[800];
  return (
    <Box flex={1} bg={"gray.800"}>
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
}
