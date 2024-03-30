import React, {useEffect, useRef, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Image} from "expo-image";
import {HERO_IMAGE_HEIGHT} from "@/consts";
import Carousel from "react-native-reanimated-carousel";
import {Progress} from "./progress";

type Props = {
  images: string[];
  activeIndex: number;
};

export const VerticalSlideShow = ({images, activeIndex}: Props) => {
  const ref = useRef<any>(null);
  const [slideShowIndex, setSlideShowIndex] = useState(0);

  useEffect(() => {
    if (activeIndex === 0) return;
    ref.current.scrollTo({index: 0});
  }, [activeIndex]);

  return (
    <View style={{position: "relative"}}>
      <Progress images={images} slideShowIndex={slideShowIndex} />

      <Carousel
        ref={ref}
        data={images}
        onSnapToItem={(index) => setSlideShowIndex(index)}
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
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: HERO_IMAGE_HEIGHT,
    backgroundColor: "red",
  },
});
