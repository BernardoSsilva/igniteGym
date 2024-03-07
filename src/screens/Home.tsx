import { ExerciseCard } from "@components/exerciseCard/exerciseCard";
import { FilterGroup } from "@components/filterGroup/filterGroup";
import { HomeHeader } from "@components/homeHeader/homeHeader";
import { FlatList, HStack, Heading, Text, VStack } from "native-base";
import { useEffect, useState } from "react";

export function Home() {
  const [exercises, setExercises] = useState([
    { name: "Puxada frontal", info: "3 séries x 12 repetições" },
    { name: "Remada curvada", info: "3 séries x 12 repetições" },
    { name: "Remada unilateral", info: "3 séries x 12 repetições" },
    { name: "Levantamento terra", info: "3 séries x 12 repetições" },
  ]);

  const [groups, setGroups] = useState([
    "costa",
    "peito",
    "biceps",
    "triceps",
    "pernas",
  ]);
  const [selectedGroup, setSelectedGroup] = useState("");

  useEffect(() => {
    console.log(selectedGroup);
  }, [selectedGroup]);

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        renderItem={({ item }) => {
          return (
            <FilterGroup
              name={item}
              isActive={selectedGroup === item}
              onPress={() => setSelectedGroup(item)}
            />
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxH={10}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent={"space-between"} marginBottom={5}>
          <Heading color={"gray.200"} fontSize={"md"}>
            Exercícios
          </Heading>
          <Text color={"gray.200"} fontSize={"sm"}>
            4
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          renderItem={({ item }) => {
            return (
              <ExerciseCard name={item.name} image={""} info={item.info} />
            );
          }}
        />
      </VStack>
    </VStack>
  );
}
