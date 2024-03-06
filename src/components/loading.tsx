import { Center, Spinner } from "native-base";

export function LoadingIndicator() {
  return (
    <Center flex={1} bg="dark.50">
      <Spinner size={100} color="green.300" />
    </Center>
  );
}
