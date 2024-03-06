import { LoadingIndicator } from "@components/loading/loading";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { Text, View } from "react-native";
import { THEME } from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <NativeBaseProvider>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      {fontsLoaded ? <Text>"Aoba"</Text> : <LoadingIndicator />}
    </NativeBaseProvider>
  );
}
