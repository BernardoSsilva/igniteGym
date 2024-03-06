import { Button as NativeBaseButton, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <NativeBaseButton
      px={5}
      h={20}
      bg={"green.700"}
      rounded={"sm"}
      _pressed={{
        background: "green.500",
      }}
      w="full"
      {...rest}
    >
      <Text color={"white"}>{title}</Text>
    </NativeBaseButton>
  );
}
