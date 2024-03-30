import React, {useEffect} from "react";
import {View} from "react-native";
import {
  ACTIVE_PROGRESS_BAR_HEIGHT,
  DEFAULT_PROGRESS_BAR_HEIGHT,
} from "@/consts";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type Props = {
  images: string[];
  slideShowIndex: number;
};

export const Progress = ({images, slideShowIndex}: Props) => {
  const heights = images.map(() => useSharedValue(DEFAULT_PROGRESS_BAR_HEIGHT));

  useEffect(() => {
    heights.forEach((height, index) => {
      height.value = withTiming(
        index === slideShowIndex
          ? ACTIVE_PROGRESS_BAR_HEIGHT
          : DEFAULT_PROGRESS_BAR_HEIGHT,
        {
          duration: 200,
        }
      );
    });
  }, [slideShowIndex]);

  const animatedStyles = heights.map((height) =>
    useAnimatedStyle(() => {
      return {height: height.value};
    })
  );

  return (
    <View
      style={{
        flexDirection: "column",
        gap: 8,
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 16,
        justifyContent: "center",
        zIndex: 1,
      }}
    >
      {images.map((_, index) => (
        <Animated.View
          style={[
            animatedStyles[index],
            {
              width: 1,
              height:
                slideShowIndex === index
                  ? ACTIVE_PROGRESS_BAR_HEIGHT
                  : DEFAULT_PROGRESS_BAR_HEIGHT,
              backgroundColor: "blue",
            },
          ]}
        />
      ))}
    </View>
  );
};
