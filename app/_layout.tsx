import {StyleSheet, View} from "react-native";
// import {Tabs} from "expo-router";
import {Drawer} from "expo-router/drawer";
import {GestureHandlerRootView} from "react-native-gesture-handler";

export default function HomeLayout() {
  return (
    <View style={styles.container}>
      <GestureHandlerRootView style={{flex: 1}}>
        <Drawer>
          <Drawer.Screen
            name="profile/[slug]"
            options={{
              drawerLabel: "Profile",
              title: "Profile",
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
  },
});
