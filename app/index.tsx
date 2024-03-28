import {StyleSheet, View, FlatList, TouchableOpacity} from "react-native";
import {useRef, useState} from "react";
import {thumbnails} from "./thumbnails";
import {Image} from "expo-image";
import {SafeAreaView} from "react-native-safe-area-context";
import {
  SCREEN_WIDTH,
  THUMBNAIL_GAP,
  THUMBNAIL_HEIGHT,
  THUMBNAIL_WIDTH,
  THUMBNAIL_WIDTH_AND_GAP,
} from "@/consts";

const data = thumbnails.map((thumbnail) => ({
  key: thumbnail.key,
  image: thumbnail.src,
}));

export default function Page() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const ref = useRef<FlatList>(null);

  const handleThumbnailPress = (index: number) => {
    if (index === activeIndex) return null;
    ref.current?.scrollToIndex({
      index,
      animated: true,
    });
  };

  return (
    <SafeAreaView
      style={{backgroundColor: "white", flex: 1, display: "flex", gap: 24}}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <Image
          source={data[activeIndex].image}
          contentFit="contain"
          style={{
            flex: 1,
          }}
        />
      </View>
      <View
        style={{
          height: THUMBNAIL_HEIGHT * 2,
        }}
      >
        <FlatList
          ref={ref}
          data={data}
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

            setActiveIndex(item.index);
          }}
          horizontal={true}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => handleThumbnailPress(index)}
                activeOpacity={1}
              >
                <Image
                  source={item.image}
                  style={styles.image}
                  contentFit="contain"
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View
        style={{
          width: THUMBNAIL_WIDTH,
          backgroundColor: "blue",
          height: 1,
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: 24,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: THUMBNAIL_WIDTH,
    height: THUMBNAIL_HEIGHT,
  },
});
