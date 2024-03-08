import { Button } from "@components/button/button";
import { Center, HStack, Text, VStack, useTheme } from "native-base";
import SeriesIcon from "@assets/series.svg";
import RepetitionsIcon from "@assets/repetitions.svg";
import { Barbell, Repeat } from "phosphor-react-native";
type Props = {
  series: string;
  repeats: string;
};

export function ExerciseInfoCard({ series, repeats }: Props) {
  const { colors } = useTheme();
  return (
    <VStack bg={"gray.700"} w={"full"} mt={5} px={5} borderRadius={10}>
      <HStack justifyContent={"space-between"}>
        <HStack padding={5}>
          <Barbell size={25} color={colors.green[500]} />
          <Text fontSize={20} color={"gray.100"} ml={2}>
            {series}
          </Text>
        </HStack>

        <HStack padding={5}>
          <Repeat color={colors.green[500]} size={25}  />
          <Text fontSize={20} color={"gray.100"} ml={2}>
            {repeats}
          </Text>
        </HStack>
      </HStack>
      <Center marginBottom={5}>
        <Button title={"Marcar como realizado"} />
      </Center>
    </VStack>
  );
}
