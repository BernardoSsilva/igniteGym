import {
  Button as NativeBaseButton,
  IButtonProps,
  Text,
  Center,
} from "native-base";

type Props = IButtonProps & {
  title: string;
};

export function Button({ title, variant, ...rest }: Props) {
  return (
    <NativeBaseButton
      padding={5}
      w={"full"}
      
      bg={variant === "outline" ? "transparent" : "green.700"}
      rounded={"sm"}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor={"green.500"}
      _pressed={{
        bg: variant === "outline" ? "gray.500" : "green.500",
      }}
      textAlign={"center"}
      {...rest}
    >
      <Center>
        <Text fontFamily="heading" bold  fontSize={"md"} color={variant === "outline" ? "green.500" : "white"}>
          {title}
        </Text>
      </Center>
    </NativeBaseButton>
  );
}
