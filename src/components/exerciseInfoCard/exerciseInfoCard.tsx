import { Button } from "@components/button/button";
import { Center, HStack, Text, VStack } from "native-base";
import SeriesIcon from "@assets/series.svg";
import RepetitionsIcon from "@assets/repetitions.svg";
import { Barbell, Repeat } from "phosphor-react-native";
type Props = {
  series: string;
  repeats: string;
};

export function ExerciseInfoCard({ series, repeats }: Props) {
  return (
    <VStack bg={"gray.700"} mt={4} p={5} borderRadius={10}>
      <HStack maxWidth={"100%"}>
        <Barbell size={25} />
        <Text ml={2} fontSize={20}>
          {series}
        </Text>

        <Repeat style={{marginLeft:29}} size={25} />
        <Text ml={2} fontSize={20}>{repeats}</Text>
      </HStack>
      <Button marginTop={5}  title={"Marcar como realizado"} />
    </VStack>
  );
}
