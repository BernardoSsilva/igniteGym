import { Image } from "native-base";

type Props = {
  imageSource: string;
};

export function UserImage({ imageSource }: Props) {
  return <Image borderRadius={"full"} borderColor={"gray.500"} borderWidth={3}  w={56} h={56} alt="profile image" source={{ uri: imageSource }} />;
}
