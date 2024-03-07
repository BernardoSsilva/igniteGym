import { DefaultHeader } from "@components/defaultHeader/defaultHeader";
import { HistoryCard } from "@components/historyCard/historyCard";
import { Center, Text, VStack } from "native-base";

export function History() {
  return (
    <VStack flex={1}>
      <DefaultHeader text="Histórico de Exercícios" />
      <VStack >
        <HistoryCard title={"Costas"} text={"Puxada frontal"} hour={"08:56"} />
      </VStack>
    </VStack>
  );
}
