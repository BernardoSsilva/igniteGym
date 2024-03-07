import { DefaultHeader } from "@components/defaultHeader/defaultHeader";
import { Center, Text, VStack } from "native-base";

export function Profile() {
  return (
    <VStack flex={1}>
      <DefaultHeader text="Perfil" />
    </VStack>
  );
}
