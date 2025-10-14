import React from "react";
import { View, Text, StyleSheet } from "react-native";

/**
 * Very simple "Home" screen.
 * This is what the user should see first when the app opens (via the Tab Navigator).
 */
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the App! 🎉</Text>
      <Text style={styles.subtitle}>
        This is the Home tab (default/initial tab).
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // Take full height and center content
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  // Big bold title text
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 8,
  },
  // Smaller subtitle text
  subtitle: {
    fontSize: 16,
    textAlign: "center",
  },
});
