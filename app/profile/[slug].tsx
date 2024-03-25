import {Link, useLocalSearchParams} from "expo-router";

import {Pressable, Text, View} from "react-native";

export default function Page() {
  const {slug} = useLocalSearchParams();

  return (
    <View>
      <Link href="/home/messages" asChild>
        <Pressable>
          <Text>Messages</Text>
        </Pressable>
      </Link>
      <Text>Blog post: {slug}</Text>
    </View>
  );
}
