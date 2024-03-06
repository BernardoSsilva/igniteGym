import { Center, Image, ScrollView, VStack, Text, Heading } from "native-base";
import BackgroundImage from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";
import { Input } from "@components/input/input";
import { Button } from "@components/button/button";
import { useNavigation } from "@react-navigation/native";
export function SignUp() {
    const navigation= useNavigation();
    function navigateToSignIn(){
        navigation.navigate("signIn")
    }
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <VStack px={10} flex={1} bg={"gray.800"}>
        <Image
          source={BackgroundImage}
          position={"absolute"}
          resizeMode="contain"
          alt="pessoas treinando"
        />

        <Center my={20}>
          <LogoSvg />
          <Text color="gray.200">Treine sua mente e o seu corpo</Text>
        </Center>

        <Center>
          <Heading
            color={"white"}
            mb={5}
            fontSize={"xl"}
            fontFamily={"heading"}
          >
            Crie sua conta
          </Heading>
          <Input placeholder="Nome" />
          <Input placeholder="E-mail" keyboardType="email-address" />
          <Input placeholder="Senha" secureTextEntry />
          <Input placeholder="Confirme a Senha" secureTextEntry />
          <Button title="Criar e acessar" />
          <Button onPress={navigateToSignIn} mt={10} variant="outline" title="Retornar ao login" />
        </Center>
      </VStack>
    </ScrollView>
  );
}
