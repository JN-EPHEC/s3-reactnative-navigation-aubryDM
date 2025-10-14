// app/navigation/SocialTabsNavigator.tsx
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// --- Tab leaf screens (3 simple ones) ---
import HomeScreen from "../screens/tabs/HomeScreen";
import ProfileScreen from "../screens/tabs/ProfileScreen";
import SettingsScreen from "../screens/tabs/SettingsScreen";

// --- Blog stack screens (we’ll nest them as the 4th “Blog” tab) ---
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostListScreen from "../screens/PostListScreen";
import PostDetailScreen from "../screens/PostDetailScreen";

/**
 * =========================
 * Bottom Tabs Type (no params)
 * =========================
 * Each tab is a top-level “section” of the app. None of them
 * accept route params for this exercise, so they’re all `undefined`.
 */
export type TabParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
  Blog: undefined; // The “Blog” tab hosts a nested stack (PostList -> PostDetail)
};

const Tab = createBottomTabNavigator<TabParamList>();

/**
 * =========================
 * Blog Stack Type (with params)
 * =========================
 * This is the type used by the nested Blog stack. It is exported so that
 * PostListScreen/PostDetailScreen can type their props against it.
 * - PostList: no params
 * - PostDetail: requires postId, title, content
 */
export type BlogStackParamList = {
  PostList: undefined;
  PostDetail: { postId: string; title: string; content: string };
};

// Create a typed native stack for the Blog feature.
const BlogStack = createNativeStackNavigator<BlogStackParamList>();

/**
 * BlogStackScreen:
 * A nested navigator that defines the Blog flow (list -> detail).
 * IMPORTANT:
 * - Do NOT add <NavigationContainer> here; the app already has one at the root.
 */
function BlogStackScreen() {
  return (
    <BlogStack.Navigator initialRouteName="PostList">
      <BlogStack.Screen
        name="PostList"
        component={PostListScreen}
        options={{ title: "The Blog" }}
      />
      <BlogStack.Screen
        name="PostDetail"
        component={PostDetailScreen}
        // Show the post title in the header if available; fallback to a generic title
        options={({ route }) => ({
          title: route.params?.title ?? "Post Details",
        })}
      />
    </BlogStack.Navigator>
  );
}

/**
 * SocialTabsNavigator:
 * The bottom tab bar with 4 tabs: Home, Profile, Settings, Blog.
 * The “Blog” tab renders the nested BlogStackScreen above.
 */
export default function SocialTabsNavigator() {
  return (
    <Tab.Navigator
      // Home is the default tab when the app starts
      initialRouteName="Home"
      /**
       * Global options for all tabs:
       * - active/inactive colors (bonus requirement)
       * - centered header title
       * - icon per tab based on route name
       */
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#007aff",   // active color (iOS blue)
        tabBarInactiveTintColor: "#8e8e93", // inactive gray
        headerTitleAlign: "center",

        // Provide an icon for each tab
        tabBarIcon: ({ color, size, focused }) => {
          let icon: keyof typeof Ionicons.glyphMap = "help-circle-outline";
          if (route.name === "Home") icon = focused ? "home" : "home-outline";
          if (route.name === "Profile") icon = focused ? "person" : "person-outline";
          if (route.name === "Settings") icon = focused ? "settings" : "settings-outline";
          if (route.name === "Blog") icon = focused ? "book" : "book-outline";
          return <Ionicons name={icon} size={size} color={color} />;
        },
      })}
    >
      {/* 3 simple tabs */}
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

      {/* 4th tab: the Blog stack (list -> detail) */}
      <Tab.Screen
        name="Blog"
        component={BlogStackScreen}
        options={{ tabBarLabel: "Blog", title: "Blog" }}
      />
    </Tab.Navigator>
  );
}
