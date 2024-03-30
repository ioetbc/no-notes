import React, {useEffect, useRef} from "react";
import {Button, StyleSheet, View} from "react-native";
import {Image} from "expo-image";
import {HERO_IMAGE_HEIGHT} from "@/consts";
import Carousel from "react-native-reanimated-carousel";

type Props = {
  images: string[];
  activeIndex: number;
};

export const VerticalSlideShow = ({images, activeIndex}: Props) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    if (activeIndex === 0) return;
    ref.current.scrollTo({index: 0});
  }, [activeIndex]);

  return (
    <>
      <Carousel
        ref={ref}
        data={images}
        renderItem={(item) => {
          console.log("item", item);
          return (
            <View style={{backgroundColor: "orange", flex: 1}}>
              <Image
                source={item.item}
                style={styles.image}
                contentFit="contain"
              />
            </View>
          );
        }}
        vertical
        height={HERO_IMAGE_HEIGHT}
      />
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    // flex: 1,
    height: HERO_IMAGE_HEIGHT,
    backgroundColor: "red",
  },
});
