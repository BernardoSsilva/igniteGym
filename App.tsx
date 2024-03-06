import { LoadingIndicator } from "@components/loading/loading";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Router } from "@routes/routes";
import { SignIn } from "@screens/signin";
import { SignUp } from "@screens/signup";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <NativeBaseProvider>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      {fontsLoaded ? <Router /> : <LoadingIndicator />}
    </NativeBaseProvider>
  );
}
