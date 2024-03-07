import { Image } from "native-base";

type Props = {
  imageSource: string;
};

export function UserImage({ imageSource }: Props) {
  return <Image borderRadius={"full"} borderColor={"gray.500"} borderWidth={3}  w={48} h={48} alt="profile image" source={{ uri: imageSource }} />;
}
