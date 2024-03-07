import { FilterGroup } from "@components/filterGroup/filterGroup";
import { HomeHeader } from "@components/homeHeader/homeHeader";
import { HStack, VStack } from "native-base";
import { useEffect, useState } from "react";

export function Home() {
  const [selectedGroup, setSelectedGroup] = useState("");

  useEffect(() => {
    console.log(selectedGroup);
  }, [selectedGroup]);

  return (
    <VStack flex={1}>
      <HomeHeader />
      <HStack>
        <FilterGroup
          name={"costas"}
          isActive={selectedGroup === "costas"}
          onPress={() => setSelectedGroup("costas")}
        />
        <FilterGroup
          name={"peito"}
          isActive={selectedGroup === "peito"}
          onPress={() => setSelectedGroup("peito")}
        />
      </HStack>
    </VStack>
  );
}
