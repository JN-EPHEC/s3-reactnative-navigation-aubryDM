// app/screens/ecommerce/ProductDetailScreen.tsx
/**
 * ProductDetailScreen:
 * - Receives params from ProductList (productId, name, description)
 * - Displays details
 * - The bottom tab bar stays visible because this is still inside the Shop tab
 */
import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ShopStackParamList } from "../../navigation/ECommerceTabsNavigator";

type Props = NativeStackScreenProps<ShopStackParamList, "ProductDetail">;

export default function ProductDetailScreen({ route }: Props) {
  const { name, description } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.body}>{description}</Text>
      <Text style={[styles.body, { marginTop: 12 }]}>
        (Notice the bottom tab bar is still visible — we’re inside the Shop tab’s stack.)
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 24, fontWeight: "700", marginBottom: 12 },
  body: { fontSize: 16, lineHeight: 22 },
});
