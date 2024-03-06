import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <View>
      {/* {fontsLoaded ? <Text>"Aoba"</Text> : <Text>Carregando</Text>} */}

      <Text>Hello world</Text>

      <StatusBar
       
        backgroundColor="transparent"
        translucent
      />
    </View>
  );
}
