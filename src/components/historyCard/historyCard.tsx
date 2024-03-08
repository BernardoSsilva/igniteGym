import { HStack, Heading, Text, VStack } from "native-base";

type Props = {
  title: string;
  text: string;
  hour: string;
};

export function HistoryCard({ title, text, hour }: Props) {
  return (
    <HStack justifyContent={"space-between"} bg={"gray.700"} padding={5} borderRadius={10} mb={3} >
      <VStack>
        <Heading numberOfLines={1} color={"white"} fontSize={"xl"} fontWeight={"bold"} textTransform={"capitalize"}>{title}</Heading>
        <Text numberOfLines={1} color={"gray.200"}>{text}</Text>
      </VStack>
      <Text color={"gray.400"}>{hour}</Text>
    </HStack>
  );
}
