import { Center, Spinner } from "native-base";

export function LoadingIndicator() {
  return (
    <Center flex={1} bg="gray.700">
      <Spinner size={100} color="green.500" />
    </Center>
  );
}
