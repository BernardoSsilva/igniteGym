import { DefaultHeader } from "@components/defaultHeader/defaultHeader";
import { HistoryCard } from "@components/historyCard/historyCard";
import { Heading, SectionList, VStack } from "native-base";
import { useState } from "react";

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: "26.08.22",
      data: [
        { title: "Costas", content: "puxada frontal", hour: "08:06" },
        { title: "Biceps", content: "Remada unilateral", hour: "08:06" },
      ],
    },
    {
      title: "27.08.22",
      data: [{ title: "Costas", content: "Puxada frontal", hour: "08:06" }],
    },
  ]);
  return (
    <VStack flex={1}>
      <DefaultHeader text="Histórico de Exercícios" />
      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <HistoryCard
            title={item.title}
            text={item.content}
            hour={item.hour}
          />
        )}
        renderSectionHeader={({ section }) => (
          <Heading color={"gray.200"} fontSize={"md"} mt={10} mb={3}>
            {section.title}
          </Heading>
        )}
        px={8}
      />
    </VStack>
  );
}
