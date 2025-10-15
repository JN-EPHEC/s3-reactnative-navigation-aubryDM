// app/screens/ecommerce/CartScreen.tsx
/**
 * CartScreen:
 * - Simple screen for the "My Cart" tab
 * - Static message is enough for the exercise
 */
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Shopping Cart is empty 🛒</Text>
      <Text style={styles.subtitle}>Add items from the Shop tab to see them here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 16 },
  title: { fontSize: 18, fontWeight: "700", marginBottom: 8, textAlign: "center" },
  subtitle: { fontSize: 14, color: "#444", textAlign: "center" },
});
