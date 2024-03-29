import React, {useCallback, useRef} from "react";
import {Text, StyleSheet} from "react-native";
import BottomSheet, {BottomSheetView} from "@gorhom/bottom-sheet";
import {BOTTOM_SHEET_DEFAULT_HEIGHT, SCREEN_HEIGHT} from "@/consts";

export const Sheet = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      snapPoints={[BOTTOM_SHEET_DEFAULT_HEIGHT, "100%"]}
      handleStyle={{backgroundColor: "blue"}}
      handleIndicatorStyle={{backgroundColor: "white"}}
    >
      <BottomSheetView style={blah.contentContainer}>
        <Text>hello 🎉</Text>
      </BottomSheetView>
    </BottomSheet>
  );
};

const blah = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    display: "flex",
    backgroundColor: "lightblue",
  },
});
