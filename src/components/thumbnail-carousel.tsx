import React, {useRef} from "react";
import {FlatList, StyleSheet, TouchableOpacity, View} from "react-native";
import {Image} from "expo-image";
import {
  HERO_IMAGE_HEIGHT,
  SCREEN_WIDTH,
  THUMBNAIL_GAP,
  THUMBNAIL_HEIGHT,
  THUMBNAIL_WIDTH,
  THUMBNAIL_WIDTH_AND_GAP,
} from "@/consts";
import {products} from "app/products";

type Props = {
  handleActiveIndex: (index: number) => void;
  activeIndex: number;
};

export const ThumbnailCarousel = ({handleActiveIndex, activeIndex}: Props) => {
  const ref = useRef<FlatList>(null);

  const handleThumbnailPress = (index: number) => {
    if (index === activeIndex) return null;
    ref.current?.scrollToIndex({
      index,
      animated: true,
    });
  };

  return (
    <View
      style={{
        height: THUMBNAIL_HEIGHT * 2,
        bottom: 124,
        backgroundColor: "yellow",
      }}
    >
      <FlatList
        ref={ref}
        data={products}
        initialScrollIndex={activeIndex}
        getItemLayout={(_, index) => ({
          length: THUMBNAIL_WIDTH_AND_GAP,
          offset: THUMBNAIL_WIDTH_AND_GAP * index,
          index,
        })}
        contentContainerStyle={{
          paddingLeft: SCREEN_WIDTH / 2 - THUMBNAIL_WIDTH / 2,
          paddingRight: SCREEN_WIDTH / 2 - THUMBNAIL_WIDTH / 2,
          gap: THUMBNAIL_GAP,
        }}
        showsHorizontalScrollIndicator={false}
        snapToInterval={THUMBNAIL_WIDTH_AND_GAP}
        onViewableItemsChanged={({viewableItems}) => {
          const [item] = viewableItems;
          if (!item || item?.index === null) return;

          handleActiveIndex(item.index);
        }}
        horizontal={true}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                handleThumbnailPress(index);
              }}
              activeOpacity={1}
            >
              <Image
                source={item.thumbnail}
                style={styles.image}
                contentFit="contain"
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: THUMBNAIL_WIDTH,
    height: THUMBNAIL_HEIGHT,
  },
});
