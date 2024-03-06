import BackgroundImage from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";
import { Button } from "@components/button/button";
import { Input } from "@components/input/input";
import { Center, Heading, Image, ScrollView, Text, VStack } from "native-base";

export function SignIn() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
            mb={6}
            fontFamily={"heading"}
            color={"green.100"}
          >
            Acesse sua conta
          </Heading>

          <Input
            placeholder="e-mail"
            keyboardType={"email-address"}
            autoCapitalize="none"
          />
          <Input placeholder="Senha" secureTextEntry />
          <Button title="Acessar" />

          <Center marginTop={24} w="full">
            <Text color={"gray.100"} fontSize={"sm"} mb={3} fontFamily={"body"}>
              Ainda não tem acesso?
            </Text>

            <Button title="Criar conta" variant={"outline"} />
          </Center>
        </Center>
      </VStack>
    </ScrollView>
  );
}
