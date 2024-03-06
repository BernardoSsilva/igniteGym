import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { View } from "native-base";

export function Router() {
  return (
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
  );
}
