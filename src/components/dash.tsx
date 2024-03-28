import React from "react";
import {View} from "react-native";
import {THUMBNAIL_WIDTH} from "@/consts";

export const Dash = () => {
  return (
    <View
      style={{
        width: THUMBNAIL_WIDTH,
        backgroundColor: "blue",
        height: 1,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    />
  );
};
