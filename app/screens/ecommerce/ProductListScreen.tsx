// app/screens/ecommerce/ProductListScreen.tsx
/**
 * ProductListScreen:
 * - Lives inside the Shop stack (nested under the Shop tab)
 * - Shows a few fake products
 * - Tapping a product navigates to ProductDetail WITH params
 */
import React from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ShopStackParamList } from "../../navigation/ECommerceTabsNavigator";

// Strongly type this screen as the "ProductList" route in the Shop stack
type Props = NativeStackScreenProps<ShopStackParamList, "ProductList">;

// Fake data for the exercise
const PRODUCTS = [
  { id: "p1", name: "Laptop", description: 'Fast 14" laptop with 16GB RAM' },
  { id: "p2", name: "Mouse", description: "Wireless mouse with silent clicks" },
  { id: "p3", name: "Keyboard", description: "Mechanical keyboard, blue switches" },
];

export default function ProductListScreen({ navigation }: Props) {
  // Render a single row in the list (as a tappable Pressable)
  function renderItem({ item }: { item: (typeof PRODUCTS)[number] }) {
    return (
      <Pressable
        style={({ pressed }) => [styles.item, pressed && styles.itemPressed]}
        // Navigate INSIDE the Shop stack to ProductDetail, passing params
        onPress={() =>
          navigation.navigate("ProductDetail", {
            productId: item.id,
            name: item.name,
            description: item.description,
          })
        }
      >
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subtitle}>{item.description}</Text>
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(p) => p.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  list: { padding: 16 },
  item: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e5e5ea",
    backgroundColor: "#fafafa",
    marginBottom: 12,
  },
  itemPressed: { opacity: 0.75 },
  title: { fontSize: 16, fontWeight: "600", marginBottom: 4 },
  subtitle: { fontSize: 14, color: "#555" },
});
