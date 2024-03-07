import { HomeHeader } from "@components/homeHeader/homeHeader";
import { Center, Text, VStack } from "native-base";

export function Home() {
  return (
    <VStack flex={1} >
      <HomeHeader />
    </VStack>
  );
}
