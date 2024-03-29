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
          length: HERO_IMAGE_HEIGHT * 0.85,
          offset: HERO_IMAGE_HEIGHT * 0.85 * index,
          index,
        })}
        contentContainerStyle={{
          // height: HERO_IMAGE_HEIGHT * 0.9 * images.length,
          paddingBottom: BOTTOM_SHEET_DEFAULT_HEIGHT * 0.85,
        }}
        snapToInterval={HERO_IMAGE_HEIGHT * 0.85}
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
    // flex: 1,
    height: HERO_IMAGE_HEIGHT * 0.85,
    backgroundColor: "red",
  },
});
