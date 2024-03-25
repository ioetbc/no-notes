import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {faker} from "@faker-js/faker";
import {useRef, useState} from "react";

const SCREEN_WIDTH = Dimensions.get("screen").width;

const THUMBNAIL_WIDTH = 40;
const THUMBNAIL_HEIGHT = 40;

faker.seed(10);

const data = [...Array(60).keys()].map(() => ({
  key: faker.string.uuid(),
  job: faker.animal.cat(),
}));

const _colors = {
  active: "red",
  inactive: "blue",
};

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
    <View style={styles.container}>
      <View
        style={{
          height: 40,
          width: THUMBNAIL_WIDTH,
          backgroundColor: "transparent",
          borderWidth: 1,
          borderBottomColor: "red",
          borderRightColor: "transparent",
          borderLeftColor: "transparent",
          borderTopColor: "transparent",
          position: "absolute",
          top: 220,
          left: Dimensions.get("screen").width / 2 - THUMBNAIL_WIDTH / 2,
          right: 0,
          bottom: 0,
          zIndex: 100,
        }}
      />

      <View
        style={{
          width: 200,
          height: 200,
        }}
      >
        <Text>{activeIndex}</Text>
      </View>
      <FlatList
        ref={ref}
        data={data}
        initialScrollIndex={activeIndex}
        getItemLayout={(_, index) => ({
          length: THUMBNAIL_WIDTH,
          offset: THUMBNAIL_WIDTH * index,
          index,
        })}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{
          paddingLeft: SCREEN_WIDTH / 2 - THUMBNAIL_WIDTH / 2,
          paddingRight: SCREEN_WIDTH / 2 - THUMBNAIL_WIDTH / 2,
        }}
        showsHorizontalScrollIndicator={false}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: THUMBNAIL_WIDTH / 2,
        }}
        snapToInterval={THUMBNAIL_WIDTH}
        onViewableItemsChanged={({viewableItems}) => {
          const [item] = viewableItems;

          if (!item) return;
          if (item?.index === null) return;
          if (isNaN(item.index)) return;
          if (item.index === data.length) return;

          setActiveIndex(item.index);
        }}
        horizontal
        renderItem={({index}) => {
          return (
            <TouchableOpacity onPress={() => handleThumbnailPress(index)}>
              <View
                style={{
                  width: THUMBNAIL_WIDTH,
                  height: THUMBNAIL_HEIGHT,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 1,
                  borderColor:
                    index === activeIndex ? _colors.active : _colors.inactive,
                }}
              >
                <Text style={{color: "#36303F", fontWeight: "700"}}>
                  {index}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  image: {
    flex: 1,
  },
});
