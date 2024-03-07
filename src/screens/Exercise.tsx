import { DefaultHeader } from "@components/defaultHeader/defaultHeader";
import { ExercisesHeader } from "@components/exercisesHeader/exercisesHeader";
import { Center, Text, VStack } from "native-base";

export function Exercise() {
  return (
    <VStack flex={1}>
      <ExercisesHeader text={"Puxada frontal"} type={"Costas"} />
    </VStack>
  );
}
