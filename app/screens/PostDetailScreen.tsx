import React from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
// ✅ Use the Blog stack type (this screen lives inside the Blog tab’s stack now)
import { BlogStackParamList } from "../navigation/SocialTabsNavigator";

// Props for the "PostDetail" route of the Blog stack
type Props = NativeStackScreenProps<BlogStackParamList, "PostDetail">;

export default function PostDetailScreen({ route }: Props) {
  /**
   * Read the params sent from PostList:
   * - postId: string (not used for rendering here)
   * - title: string
   * - content: string
   */
  const { title, content } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{content}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // Padding inside the scrollable area
  container: { padding: 16 },
  // Post title styling
  title: { fontSize: 24, fontWeight: "700", marginBottom: 12 },
  // Post body styling
  body: { fontSize: 16, lineHeight: 24 },
});
