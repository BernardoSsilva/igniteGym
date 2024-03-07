import { IPressableProps, Pressable, Text } from "native-base";

type Props = IPressableProps & {
  name: string;
  isActive: boolean;
};

export function FilterGroup({ name, isActive, ...rest }: Props) {
  return (
    <Pressable
      w={24}
      h={10}
      mr={3}
      bg={"gray.600"}
      rounded={"md"}
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      borderWidth={isActive ? 1 : 0}
      borderColor={"green.500"}
      _pressed={{
        borderColor: "green.500",
        borderWidth: 1,
      }}
      {...rest}
    >
      <Text
        textTransform={"uppercase"}
        fontWeight={"bold"}
        color={isActive ? "green.500" : "gray.200"}
      >
        {name}
      </Text>
    </Pressable>
  );
}
