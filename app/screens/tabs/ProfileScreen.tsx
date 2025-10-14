import React from "react";
import { View, Text, StyleSheet } from "react-native";

/**
 * Static "Profile" screen.
 * We hardcode some user information for this exercise.
 */
export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>John Doe</Text>
      <Text style={styles.line}>Username: @johndoe</Text>
      <Text style={styles.line}>Email: john.doe@example.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // Full screen with centered content
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  // Prominent name/title
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
  },
  // Simple info rows
  line: {
    fontSize: 16,
    marginBottom: 4,
  },
});
