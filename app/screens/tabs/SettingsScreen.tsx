import React from "react";
import { View, Text, StyleSheet } from "react-native";

/**
 * Very simple "Settings" screen with a single message.
 */
export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Settings ⚙️</Text>
      <Text style={styles.subtitle}>Customize your app preferences here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // Full screen centered
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  // Title
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
  },
  // Subtitle text
  subtitle: {
    fontSize: 16,
    textAlign: "center",
  },
});
