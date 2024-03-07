import { DefaultHeader } from "@components/defaultHeader/defaultHeader";
import { Center, Text, VStack } from "native-base";

export function History() {
  return (
    <VStack flex={1}>
      <DefaultHeader text="Histórico de Exercícios" />
    </VStack>
  );
}
