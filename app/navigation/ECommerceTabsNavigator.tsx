// app/navigation/ECommerceTabsNavigator.tsx
/**
 * Exercise 3 navigator:
 * A Bottom Tab Navigator with:
 *  - "Shop" tab (which contains a nested Stack → ProductList -> ProductDetail)
 *  - "My Cart" tab (simple screen)
 *
 * Why a nested Stack inside the "Shop" tab?
 *  → So when you open ProductDetail, the bottom tab bar remains visible.
 */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// --- Tab 2: Cart (simple screen) ---
import CartScreen from "../screens/ecommerce/CartScreen";

// --- Shop stack (nested inside the Shop tab) ---
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductListScreen from "../screens/ecommerce/ProductListScreen";
import ProductDetailScreen from "../screens/ecommerce/ProductDetailScreen";

/** Bottom Tab routes for Exercise 3.
 *  Tabs themselves don't take params for this exercise, so all are `undefined`.
 */
export type EcomTabParamList = {
  Shop: undefined;
  "My Cart": undefined;
};
const Tab = createBottomTabNavigator<EcomTabParamList>();

/** Nested Stack under the "Shop" tab.
 *  We export the type so the product screens can type their props safely.
 */
export type ShopStackParamList = {
  ProductList: undefined;
  ProductDetail: { productId: string; name: string; description: string };
};
const ShopStack = createNativeStackNavigator<ShopStackParamList>();

/** Renders the Shop flow (list → detail) INSIDE the Shop tab. */
function ShopStackScreen() {
  // IMPORTANT: no <NavigationContainer> here — expo-router provides it at app root
  return (
    <ShopStack.Navigator initialRouteName="ProductList">
      <ShopStack.Screen
        name="ProductList"
        component={ProductListScreen}
        options={{ title: "Products" }}
      />
      <ShopStack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        // Show the product name in the header (fallback to a generic title)
        options={({ route }) => ({
          title: route.params?.name ?? "Product",
        })}
      />
    </ShopStack.Navigator>
  );
}

/** The Exercise 3 Bottom Tabs:
 *  - Shop (with nested stack)
 *  - My Cart
 */
export default function ECommerceTabsNavigator() {
  return (
    <Tab.Navigator
      // Open on the Shop tab by default
      initialRouteName="Shop"
      // Global options for all tabs (icons, colors, header)
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#0a84ff",   // active color (bonus requirement)
        tabBarInactiveTintColor: "#8e8e93", // inactive color (bonus requirement)
        headerTitleAlign: "center",

        // Pick an icon based on the current tab
        tabBarIcon: ({ color, size, focused }) => {
          let icon: keyof typeof Ionicons.glyphMap = "help-circle-outline";
          if (route.name === "Shop") icon = focused ? "bag" : "bag-outline";
          if (route.name === "My Cart") icon = focused ? "cart" : "cart-outline";
          return <Ionicons name={icon} size={size} color={color} />;
        },
      })}
    >
      {/* Tab 1: Shop → shows the nested ShopStackScreen */}
      <Tab.Screen
        name="Shop"
        component={ShopStackScreen}
        options={{ tabBarLabel: "Shop", title: "Shop" }}
      />

      {/* Tab 2: My Cart → simple screen */}
      <Tab.Screen
        name="My Cart"
        component={CartScreen}
        options={{ tabBarLabel: "My Cart", title: "My Cart" }}
      />
    </Tab.Navigator>
  );
}
