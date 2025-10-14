// app/_layout.tsx
import "react-native-reanimated";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SocialTabsNavigator from "./navigation/SocialTabsNavigator";

/**
 * Root-level stack routes.
 * For Exercise 2, the root only hosts the Bottom Tabs (SocialTabs).
 * If later you add auth/onboarding/modals, you’ll register them here too.
 */
export type RootStackParamList = {
  SocialTabs: undefined; // The bottom tabs navigator (Home, Profile, Settings, Blog)
};

// Create a typed native stack for the root level.
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootLayout() {
  /**
   * IMPORTANT:
   * We do NOT wrap this in <NavigationContainer> because expo-router
   * already provides a container at the app root. Adding one here would
   * cause the “nested NavigationContainer” error.
   */
  return (
    <Stack.Navigator initialRouteName="SocialTabs">
      {/* Single root screen: the Tabs. We hide the root header so the
          tab screens manage their own headers. */}
      <Stack.Screen
        name="SocialTabs"
        component={SocialTabsNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
