import { Button } from "@components/button/button";
import { DefaultHeader } from "@components/defaultHeader/defaultHeader";
import { Input } from "@components/input/input";
import { UserPhoto } from "@components/userPhoto/userPhoto";
import {
  Center,
  Heading,
  ScrollView,
  Skeleton,
  Text,
  VStack,
} from "native-base";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);
  return (
    <VStack flex={1}>
      <DefaultHeader text="Perfil" />
      <ScrollView margin={1} padding={5}>
        <Center alignItems={"center"}>
          {photoIsLoading ? (
            <Skeleton
              width={56}
              height={56}
              rounded={"full"}
              startColor={"gray.400"}
              endColor={"gray.700"}
            />
          ) : (
            <UserPhoto
              size={48}
              source={{ uri: "https://github.com/BernardoSsilva.png" }}
            />
          )}
          <TouchableOpacity>
            <Text
              color={"green.500"}
              fontWeight={"bold"}
              fontSize={"md"}
              mt={2}
              mb={8}
            >
              Alterar foto
            </Text>
          </TouchableOpacity>
          <Input placeholder="Nome" />
          <Input value="Email" isDisabled />
        </Center>
        <Heading mt={12} mb={9} color={"gray.100"}>
          Alterar senha
        </Heading>
        <Center marginBottom={20}>
          <Input placeholder="Senha antiga" />
          <Input placeholder="Nova senha" secureTextEntry />
          <Input placeholder="Confirmar nova senha" secureTextEntry />
          <Button title="Atualizar" />
        </Center>
      </ScrollView>
    </VStack>
  );
}
