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
  useToast,
} from "native-base";
import { useState } from "react";
import { Alert, TouchableOpacity } from "react-native";

import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

export function Profile() {
  const [userPhoto, setUserPhoto] = useState(
    "https://github.com/BernardoSsilva.png"
  );
  const toast = useToast();
  const [photoIsLoading, setPhotoIsLoading] = useState(false);

  async function handleUserPhotoSelect() {
    setPhotoIsLoading(true);
    try {
      const selectedPhoto = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
        base64: true,
      });

      if (selectedPhoto.canceled) {
        return;
      }

      if (!selectedPhoto.assets[0].uri) {
        throw Error;
      }

      const photoInfo = await FileSystem.getInfoAsync(
        selectedPhoto.assets[0].uri
      );
      if (photoInfo.size / 1024 / 1024 > 10) {
        toast.show({
          title:
            "a imagem excede o limite de memória de 10mb permitido pelo servidor",
        });
        return;
      }
      setUserPhoto(selectedPhoto.assets[0].uri);
    } catch (error) {
      console.log(error);
    } finally {
      setPhotoIsLoading(false);
    }
  }

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
            <UserPhoto size={48} userPhotoUri={userPhoto} />
          )}
          <TouchableOpacity>
            <Text
              color={"green.500"}
              fontWeight={"bold"}
              fontSize={"md"}
              mt={2}
              mb={8}
              onPress={handleUserPhotoSelect}
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
