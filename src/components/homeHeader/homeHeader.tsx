import { UserPhoto } from "@components/userPhoto/userPhoto";
import {
  HStack,
  Heading,
  Text,
  VStack,
  useTheme
} from "native-base";
import { SignOut } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
export function HomeHeader() {
  const { colors } = useTheme();
  return (
    <HStack
      style={{
        gap: 10,
        alignItems: "center",
      }}
      bg={"gray.700"}
      w="full"
      padding={5}
      paddingTop={12}
    >
      <UserPhoto
        size={16}
        source={{ uri: "https://github.com/BernardoSsilva.png" }}
        alt={"imagem do usuario"}
      />
      <VStack flex={1}>
        <Text color="gray.100">Ola!</Text>

        <Heading color="gray.100">Bernardo</Heading>
      </VStack>

      <TouchableOpacity>
        <SignOut
          size={32}
          style={{
            marginLeft: 80,
          }}
          color={colors.gray[100]}
        />
      </TouchableOpacity>
    </HStack>
  );
}
