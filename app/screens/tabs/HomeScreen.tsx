// app/screens/tabs/HomeScreen.tsx
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  // This gives us the navigation object for the CURRENT navigator (Tabs).
  const navigation = useNavigation();

  // We want to navigate to the PARENT (root stack) to open "ECommerceTabs"
  const goToExercise3 = () => {
    navigation.getParent()?.navigate("ECommerceTabs" as never);
    /**
     * Why getParent()?
     * - HomeScreen lives inside the Tab navigator.
     * - The route "ECommerceTabs" is registered on the PARENT (root Stack).
     * - So we ask the parent to navigate there.
     * Why "as never"?
     * - TypeScript trick: the parent has its own param types and we’re not passing params.
     */
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the App! 🎉</Text>
      <Text style={styles.subtitle}>This is the Home tab.</Text>

      <Pressable style={styles.button} onPress={goToExercise3}>
        <Text style={styles.buttonText}>Go to Exercise 3 (Shop)</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 16 },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 8 },
  subtitle: { fontSize: 16, textAlign: "center", marginBottom: 16 },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: "#0a84ff",
  },
  buttonText: { color: "white", fontSize: 16, fontWeight: "600" },
});
