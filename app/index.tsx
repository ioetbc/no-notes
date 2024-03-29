import {useState} from "react";
import {SafeAreaView} from "react-native";
import {products} from "./products";

import {ThumbnailCarousel} from "@/components/thumbnail-carousel";
import {Dash} from "@/components/dash";
import {VerticalSlideShow} from "@/components/vertical-slide-show";

export default function Page() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <SafeAreaView style={{backgroundColor: "white", flex: 1, display: "flex"}}>
      <VerticalSlideShow images={products[activeIndex].images} />
      <ThumbnailCarousel
        handleActiveIndex={setActiveIndex}
        activeIndex={activeIndex}
      />
      <Dash />
    </SafeAreaView>
  );
}
