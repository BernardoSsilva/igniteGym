import { Image } from "native-base";
import { ImageProps } from "react-native-svg";

type Props = ImageProps & {
  size: number;
  userPhotoUri:string
};

export function UserPhoto({ size,userPhotoUri,  ...rest }: Props) {
  return (
    <Image
      alt="user photo"
      w={size}
      h={size}
      borderRadius={"full"}
      borderWidth={2}
      borderColor={"gray.200"}
      source={{ uri: userPhotoUri}}
      {...rest}
    />
  );
}
