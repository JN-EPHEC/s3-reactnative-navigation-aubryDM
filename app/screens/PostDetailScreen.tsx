import React from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
// We import the route param types from the layout where the stack is defined
import { RootStackParamList } from "../_layout";

// This "Props" type tells this screen which route it belongs to and what params it receives.
type Props = NativeStackScreenProps<RootStackParamList, "PostDetail">;

export default function PostDetailScreen({ route }: Props) {
  /**
   * We read the params that were passed when navigating from PostList:
   * navigation.navigate("PostDetail", { postId, title, content })
   */
  const { title, content } = route.params;

  return (
    /**
     * ScrollView: lets the user scroll if the content is long.
     * contentContainerStyle: style applied to the inner content.
     */
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title of the post (passed via route params) */}
      <Text style={styles.title}>{title}</Text>

      {/* Body/content of the post (also passed via route params) */}
      <Text style={styles.body}>{content}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // Overall content wrapper for spacing
  container: {
    padding: 16, // add padding inside the scrollable area
  },
  // Post title styling
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 12,
  },
  // Post body styling
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
});
