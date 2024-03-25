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

const THUMBNAIL_WIDTH = 20;
const THUMBNAIL_HEIGHT = 40;

faker.seed(10);

const data = [...Array(20).keys()].map(() => ({
  key: faker.string.uuid(),
  job: faker.animal.cat(),
}));

const _colors = {
  active: `#FCD259ff`,
  inactive: `#FCD25900`,
};
const screenWidth = Dimensions.get("screen").width;
const _spacing = 5;

export default function Page() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const ref = useRef<FlatList>(null);

  const handleScrollToIndex = ({index}: {index: number}) => {
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
          width: 40,
          backgroundColor: "transparent",
          borderWidth: 1,
          borderBottomColor: "red",
          borderRightColor: "transparent",
          borderLeftColor: "transparent",
          borderTopColor: "transparent",
          position: "absolute",
          top: 220,
          left: Dimensions.get("screen").width / 2 - THUMBNAIL_WIDTH,
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
        style={{flexGrow: 0}}
        data={data}
        initialScrollIndex={activeIndex}
        getItemLayout={(_, index) => ({
          length: THUMBNAIL_WIDTH + _spacing * 2,
          offset: (THUMBNAIL_WIDTH + _spacing * 2) * index,
          index,
        })}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{
          paddingLeft: screenWidth / 2 - THUMBNAIL_WIDTH / 2,
          paddingRight: screenWidth / 2 - THUMBNAIL_WIDTH / 2,
          gap: _spacing * 2,
        }}
        snapToOffsets={data.map((_, index) => {
          return (
            (THUMBNAIL_WIDTH + _spacing * 2) * index -
            screenWidth / 2 +
            THUMBNAIL_WIDTH / 2
          );
        })}
        // onMomentumScrollEnd={() =>
        // }
        showsHorizontalScrollIndicator={false}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: THUMBNAIL_WIDTH / 2,
        }}
        onViewableItemsChanged={({viewableItems}) => {
          const [current] = viewableItems;
          console.log(current?.index);
          if (!current?.index) return;

          // if (current.index > data.length - 1) return;

          setActiveIndex(current.index);
        }}
        // onMomentumScrollEnd={() => handleScrollToIndex({index: activeIndex})}
        horizontal
        renderItem={({item, index: fIndex}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                if (fIndex === activeIndex) return null;
                handleScrollToIndex({index: fIndex});
              }}
            >
              <View
                style={{
                  width: THUMBNAIL_WIDTH,
                  height: THUMBNAIL_HEIGHT,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 1,
                  borderColor: _colors.active,
                  backgroundColor:
                    fIndex === activeIndex ? _colors.active : _colors.inactive,
                }}
              >
                <Text style={{color: "#36303F", fontWeight: "700"}}>
                  {fIndex}
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
    // backgroundColor: "red",
  },
  image: {
    flex: 1,
  },
});
