import {useState} from "react";
import {SafeAreaView, StyleSheet, View} from "react-native";
import {products} from "./products";

import {ThumbnailCarousel} from "@/components/thumbnail-carousel";
import {VerticalSlideShow} from "@/components/vertical-slide-show";
import {Sheet} from "@/components/sheet";

export default function Page() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.thing}>
        <VerticalSlideShow images={products[activeIndex].images} />
        <ThumbnailCarousel
          handleActiveIndex={setActiveIndex}
          activeIndex={activeIndex}
        />
      </SafeAreaView>
      <Sheet />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  thing: {
    flex: 1,
    backgroundColor: "orange",
  },
});
