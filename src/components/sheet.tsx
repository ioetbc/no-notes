import React, {useCallback, useRef} from "react";
import {Text, StyleSheet} from "react-native";
import BottomSheet, {BottomSheetView} from "@gorhom/bottom-sheet";
import {BOTTOM_SHEET_DEFAULT_HEIGHT, SCREEN_HEIGHT} from "@/consts";

type Props = {
  title: string;
  description: string;
};

export const Sheet = ({title, description}: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      snapPoints={[BOTTOM_SHEET_DEFAULT_HEIGHT, SCREEN_HEIGHT]}
      handleStyle={{backgroundColor: "blue"}}
      handleIndicatorStyle={{backgroundColor: "white"}}
    >
      <BottomSheetView style={blah.contentContainer}>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </BottomSheetView>
    </BottomSheet>
  );
};

const blah = StyleSheet.create({
  contentContainer: {
    flex: 1,
    display: "flex",
    backgroundColor: "lightblue",
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
});
