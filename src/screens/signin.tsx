import {
  NativeBaseProvider,
  VStack,
  Image,
  Text,
  Center,
  Heading,
} from "native-base";
import BackgroundImage from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";
import { Input } from "@components/input/input";

export function SignIn() {
  return (
    <VStack flex={1} bg={"gray.700"} px={10}>
      <Image
        source={BackgroundImage}
        alt="Pessoas treinando"
        resizeMode="contain"
        position={"absolute"}
      />

      <Center my={24}>
        <LogoSvg />

        <Text color={"gray.100"}>Treine sua mente e o seu corpo</Text>
      </Center>

      <Center>
        <Heading
          color={"gray.100"}
          fontSize={"sm"}
          fontSize="xl"
          mb={6}
          fontFamily={"heading"}
          color={"green.100"}
        >
          Acesse sua conta
        </Heading>

        <Input placeholder="e-mail" 
        keyboardType={"email-address"} autoCapitalize="none"/>
        <Input placeholder="Senha" secureTextEntry/>
      </Center>
    </VStack>
  );
}
