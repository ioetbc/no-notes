import {Image} from "expo-image";
import React from "react";
import {View} from "react-native";

type Props = {
  src: string;
};

export const VerticalSlideShow = ({src}: Props) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Image
        source={src}
        contentFit="contain"
        style={{
          flex: 1,
        }}
      />
    </View>
  );
};
