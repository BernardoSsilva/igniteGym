import { Image } from "native-base";

type Props = {
  imageUri: string;
};
export function ExerciseImage({ imageUri }: Props) {
  return <Image style={{width:"80%", height:"50%"}} mt={10} borderRadius={16} alt="exerciseImage" source={{ uri: imageUri }} />;
}
