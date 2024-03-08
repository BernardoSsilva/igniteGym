import { Image } from "native-base";

type Props = {
  imageUri: string;
};
export function ExerciseImage({ imageUri }: Props) {
  return <Image w={"full"} resizeMode="cover"  h={"full"} maxHeight={"350px"} mt={10} borderRadius={16} alt="exerciseImage" source={{ uri: imageUri }} />;
}
