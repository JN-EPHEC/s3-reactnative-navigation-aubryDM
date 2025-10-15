// app/_layout.tsx
import "react-native-reanimated";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Existing entry point (Exercises 1&2 + Blog)
import SocialTabsNavigator from "./navigation/SocialTabsNavigator";

// NEW: Exercise 3 entry point
import ECommerceTabsNavigator from "./navigation/ECommerceTabsNavigator";

/**
 * Root stack routes:
 * - SocialTabs: your Exercises 1&2 hub (what you already built)
 * - ECommerceTabs: Exercise 3 (Shop tabs with nested stack + My Cart)
 *
 * NOTE: We will replace this later with a Drawer as the final app root,
 * but for Exercise 3 this is enough and keeps code simple.
 */
export type RootStackParamList = {
  SocialTabs: undefined;
  ECommerceTabs: undefined; // NEW route to reach Exercise 3
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootLayout() {
  // IMPORTANT: no <NavigationContainer> here; expo-router provides it at the app root
  return (
    <Stack.Navigator initialRouteName="SocialTabs">
      {/* Exercises 1&2 (your Social tabs + Blog) */}
      <Stack.Screen
        name="SocialTabs"
        component={SocialTabsNavigator}
        options={{ headerShown: false }}
      />

      {/* Exercise 3 (new) */}
      <Stack.Screen
        name="ECommerceTabs"
        component={ECommerceTabsNavigator}
        options={{ headerShown: false }} // Tabs manage their own headers
      />
    </Stack.Navigator>
  );
}
