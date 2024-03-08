import { DefaultHeader } from "@components/defaultHeader/defaultHeader";
import { ExerciseImage } from "@components/exerciseImage/exerciseImage";
import { ExercisesHeader } from "@components/exercisesHeader/exercisesHeader";
import { Center, Text, VStack } from "native-base";

export function Exercise() {
  return (
    <VStack flex={1}>
      <ExercisesHeader text={"Puxada frontal"} type={"Costas"} />
      <Center
        flex={1}
        alignItems="center"
        justifyContent={"top"}
        padding={0}
        bg={"red.100"}
      >
        <ExerciseImage
          imageUri={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS55IEkn5f8Ud6SH_8GOMy0JPj43QiMXLPzJTmNf7O2Ow&s"
          }
        />
      </Center>
    </VStack>
  );
}
