import {HERO_IMAGE_HEIGHT} from "@/consts";
import {Image} from "expo-image";
import React, {useRef} from "react";
import {FlatList, StyleSheet, View} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import {ThumbnailCarousel} from "./thumbnail-carousel";

type Props = {
  images: string[];
};

export const VerticalSlideShow = ({images}: Props) => {
  const ref = useRef<FlatList>(null);

  return (
    <>
      <Carousel
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
