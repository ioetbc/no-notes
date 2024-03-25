import {Text} from "react-native";

type TitleProps = {
  label: string;
};

export const Title = ({label}: TitleProps) => {
  return <Text>{label}</Text>;
};
