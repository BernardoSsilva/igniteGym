import { HStack, Heading, Text, VStack } from "native-base";
import { ArrowLeft, Person } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

type Props = {
  text: string;
  type: string;
};
export function ExercisesHeader({ text, type }: Props) {
  return (
    <HStack
      justifyContent={"space-between"}
      alignItems={"center"}
      bg={"gray.700"}
      pb={6}
      pt={16}
      padding={10}
    >
      <VStack>
        <TouchableOpacity >
          <ArrowLeft size={32} color="#00B37E" />
        </TouchableOpacity>
        <Heading mt={4} color={"gray.100"} fontSize={"xl"}>
          {text}
        </Heading>
      </VStack>

      <HStack marginTop={12}>
        <Person size={24} color="gray" />
        <Text color={"gray.400"}>{type}</Text>
      </HStack>
    </HStack>
  );
}
