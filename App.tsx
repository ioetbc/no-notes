import {StatusBar} from "expo-status-bar";
import {StyleSheet, View} from "react-native";
import {GestureHandlerRootView} from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <StatusBar style="auto" />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    paddingTop: 100,
  },
});
