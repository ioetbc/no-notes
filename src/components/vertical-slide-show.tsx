import {BOTTOM_SHEET_DEFAULT_HEIGHT, HERO_IMAGE_HEIGHT} from "@/consts";
import {Image} from "expo-image";
import React, {useRef} from "react";
import {FlatList, StyleSheet} from "react-native";

type Props = {
  images: string[];
};

export const VerticalSlideShow = ({images}: Props) => {
  const ref = useRef<FlatList>(null);

  return (
    <>
      <FlatList
        ref={ref}
        data={images}
        initialScrollIndex={0}
        getItemLayout={(_, index) => ({
          length: HERO_IMAGE_HEIGHT,
          offset: HERO_IMAGE_HEIGHT * index,
          index,
        })}
        contentContainerStyle={
          {
            // paddingBottom: BOTTOM_SHEET_DEFAULT_HEIGHT,
          }
        }
        snapToInterval={HERO_IMAGE_HEIGHT}
        decelerationRate="fast"
        renderItem={({item}) => {
          return (
            <Image source={item} style={styles.image} contentFit="contain" />
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: HERO_IMAGE_HEIGHT,
    backgroundColor: "blue",
  },
});
