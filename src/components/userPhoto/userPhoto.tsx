import { Image } from "native-base";
import { ImageProps } from "react-native-svg";

type Props = ImageProps & {
  size: number;
};

export function UserPhoto({ size, ...rest }: Props) {
  return (
    <Image
      alt="user photo"
      w={size}
      h={size}
      borderRadius={"full"}
      borderWidth={2}
      borderColor={"gray.200"}
      {...rest}
    />
  );
}
