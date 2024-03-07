import { Center, Heading, View } from "native-base";

type Props = {
  text: string;
};
export function DefaultHeader({ text }: Props) {
  return (
    <View
      justifyContent={"center"}
      alignItems={"center"}
      bg={"gray.700"}
      pb={6}
      pt={16}
    >
      <Heading color={"gray.100"} fontSize={"xl"}>
        {text}
      </Heading>
    </View>
  );
}
