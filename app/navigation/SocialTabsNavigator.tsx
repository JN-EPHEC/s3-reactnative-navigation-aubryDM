import React from "react";
// Bottom tabs navigator component
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Our three tab screens (adjust paths if your folder differs)
import HomeScreen from "../screens/tabs/HomeScreen";
import ProfileScreen from "../screens/tabs/ProfileScreen";
import SettingsScreen from "../screens/tabs/SettingsScreen";
// Ionicons comes with Expo via @expo/vector-icons
import { Ionicons } from "@expo/vector-icons";

/**
 * Type for the Tab Navigator's routes and their params.
 * - We don't pass any params for these tabs, so all are 'undefined'.
 * - This is only used by TypeScript at build-time (no runtime cost).
 */
export type TabParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};

// Create a typed Bottom Tab Navigator using the type above
const Tab = createBottomTabNavigator<TabParamList>();

/**
 * This component declares the bottom tabs used in Exercise 2.
 * IMPORTANT:
 * - Do NOT wrap this in <NavigationContainer>; expo-router already provides one at the app root.
 * - From the parent Stack's perspective (in _layout.tsx), this component is "a screen".
 */
export default function SocialTabsNavigator() {
  return (
    <Tab.Navigator
      // Set default/initial tab when the app opens
      initialRouteName="Home"
      /**
       * screenOptions lets us set common options for all tabs:
       * - icons
       * - active/inactive colors (bonus requirement)
       * - header styling
       */
      screenOptions={({ route }) => ({
        // Active/inactive colors for tab icons & labels (BONUS)
        tabBarActiveTintColor: "#007aff",   // iOS blue
        tabBarInactiveTintColor: "#8e8e93", // neutral gray

        // Choose an icon based on the current tab
        tabBarIcon: ({ color, size, focused }) => {
          // Default icon (won't really show because we handle all cases below)
          let iconName: keyof typeof Ionicons.glyphMap = "alert-circle-outline";

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }

          // Render an Ionicon with the color/size that the tab bar provides
          return <Ionicons name={iconName} size={size} color={color} />;
        },

        // Optional: center header title for all tabs
        headerTitleAlign: "center",
      })}
    >
      {/* Each Tab.Screen registers a tab route with a label and component */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: "Home", title: "Home" }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: "Profile", title: "Profile" }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ tabBarLabel: "Settings", title: "Settings" }}
      />
    </Tab.Navigator>
  );
}
