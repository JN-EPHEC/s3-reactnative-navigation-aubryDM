import React from "react";
import { StyleSheet, Pressable, FlatList, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
// We import the type describing the stack routes and their params
import { RootStackParamList } from "../_layout";

// Strongly-typed props for this screen: it belongs to "PostList"
type Props = NativeStackScreenProps<RootStackParamList, "PostList">;

/**
 * Fake, in-memory list of posts.
 * In a real app this would come from a server or database.
 */
const POSTS = [
  {
    id: "1",
    title: "React Native is Awesome",
    content:
      "React Native lets you build mobile apps using only JavaScript. Learn once, write anywhere! This is a fake post used for the exercise.",
  },
  {
    id: "2",
    title: "State Management Tips",
    content:
      "Managing state can be tricky. Use simple patterns first, then introduce libraries when needed. This is sample content for the exercise.",
  },
  {
    id: "3",
    title: "UI Design Principles",
    content:
      "Good UI is about clarity and consistency. Keep interfaces simple and predictable. More sample content here.",
  },
  {
    id: "4",
    title: "Optimizing Performance",
    content:
      "Profile first, then optimize. Use proper list virtualization and avoid unnecessary renders. This is dummy text.",
  },
];

export default function PostListScreen({ navigation }: Props) {
  /**
   * Render function for each item in the FlatList.
   * We wrap each title in a Pressable so the user can tap it.
   * On press, we navigate to "PostDetail" and PASS THE PARAMS (id, title, content).
   */
  function renderItem({ item }: { item: (typeof POSTS)[number] }) {
    return (
      <Pressable
        // style can react to "pressed" state to give feedback
        style={({ pressed }) => [styles.item, pressed && styles.itemPressed]}
        // Navigate to details and pass the selected post's data as route params
        onPress={() =>
          navigation.navigate("PostDetail", {
            postId: item.id,
            title: item.title,
            content: item.content,
          })
        }
      >
        {/* We display the post title in the list */}
        <Text style={styles.itemText}>{item.title}</Text>
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      {/* FlatList efficiently renders long lists and only mounts what's on screen */}
      <FlatList
        data={POSTS} // the data source
        keyExtractor={(item) => item.id} // unique key for each item
        renderItem={renderItem} // how each row looks
        contentContainerStyle={styles.list} // padding around the list
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // Root container takes full screen height
  container: {
    flex: 1,
  },
  // Add padding around the list content
  list: {
    padding: 16,
  },
  // Individual list item styling
  item: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: "rgba(0,0,0,0.03)",
  },
  // Visual feedback when item is pressed
  itemPressed: {
    opacity: 0.7,
  },
  // Title text inside each item
  itemText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
