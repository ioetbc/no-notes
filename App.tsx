import {Title} from "@/components/title";
import {StatusBar} from "expo-status-bar";
import {StyleSheet, View} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Title label="Something else" />
      <StatusBar style="auto" />
    </View>
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
