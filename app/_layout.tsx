// app/_layout.tsx
import "react-native-reanimated";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostListScreen from "./screens/PostListScreen";
import PostDetailScreen from "./screens/PostDetailScreen";
import SocialTabsNavigator from "./navigation/SocialTabsNavigator";

/**
 * This TypeScript type describes every route in the stack and
 * the shape of the params each route expects.
 * - "PostList" takes no params (undefined)
 * - "PostDetail" expects an object with postId, title, and content
 */
export type RootStackParamList = {
  SocialTabs: undefined; //social tabs update
  PostList: undefined;
  PostDetail: { postId: string; title: string; content: string };
};

// We create a native stack navigator that uses the type above for safety & autocompletion.
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootLayout() {
  /**
   * IMPORTANT: We do NOT wrap this in <NavigationContainer> because
   * expo-router provides a container at the root. Adding one here
   * would cause the "nested NavigationContainer" error.
   */
  return (
    <Stack.Navigator initialRouteName="SocialTabs">
      {/* Host the Tab Navigator as a "screen" at the root */}
      <Stack.Screen
        name="SocialTabs"
        component={SocialTabsNavigator}
        options={{ headerShown: false }}
      />
      
      {/* First screen: list of posts */}
      <Stack.Screen
        name="PostList"
        component={PostListScreen}
        options={{ title: "The Blog" }}
      />

      {/* Second screen: shows the details of a single post.
          We can optionally set the header title dynamically using the route params. */}
      <Stack.Screen
        name="PostDetail"
        component={PostDetailScreen}
        options={({ route }) => ({
          // If you prefer a static title, replace this with: title: "Post Details"
          title: route.params?.title ?? "Post Details",
        })}
      />
    </Stack.Navigator>
  );
}
