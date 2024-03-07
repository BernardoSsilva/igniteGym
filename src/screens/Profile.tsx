import { DefaultHeader } from "@components/defaultHeader/defaultHeader";
import { UserImage } from "@components/userImage/userImage";
import { Center, ScrollView, Skeleton, Text, VStack } from "native-base";
import { useState } from "react";

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
            <UserImage imageSource="https://github.com/BernardoSsilva.png" />
          )}
        </Center>
      </ScrollView>
    </VStack>
  );
}
