import {useState} from "react";
import {thumbnails} from "./thumbnails";
import {SafeAreaView} from "react-native-safe-area-context";

import {ThumbnailCarousel} from "@/components/thumbnail-carousel";
import {Dash} from "@/components/dash";
import {VerticalSlideShow} from "@/components/vertical-slide-show";

const data = thumbnails.map((thumbnail) => ({
  key: thumbnail.key,
  image: thumbnail.src,
}));

export default function Page() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <SafeAreaView
      style={{backgroundColor: "white", flex: 1, display: "flex", gap: 24}}
    >
      <VerticalSlideShow src={data[activeIndex].image} />

      <ThumbnailCarousel
        handleActiveIndex={setActiveIndex}
        activeIndex={activeIndex}
      />

      <Dash />
    </SafeAreaView>
  );
}
