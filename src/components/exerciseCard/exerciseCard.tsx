import PuxadaFrontal from "@assets/puxadaFrontal.png";
import { HStack, Heading, Image, Text, VStack } from "native-base";
import { CaretRight } from "phosphor-react-native";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  name: string;
  image: string;
  info: string;
};

export function ExerciseCard({ name, image, info, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        width={"full"}
        borderRadius={5}
        alignItems={"center"}
        bg={"gray.700"}
        padding={2}
        marginBottom={5}
      >
        <Image
          source={{ uri: image }}
          w={16}
          h={16}
          alt="imagem de exercicio"
          borderRadius={5}
        />
        <VStack flex={1} marginLeft={4}>
          <Heading color={"white"}>{name}</Heading>
          <Text color={"gray.400"}>{info}</Text>
        </VStack>
        <CaretRight size={32} color="white" />
      </HStack>
    </TouchableOpacity>
  );
}
