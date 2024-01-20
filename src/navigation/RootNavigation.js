import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { BottomTabNavigation } from "./BottomTabNavigation";

const Stack = createSharedElementStackNavigator();

export const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="BottomTabs"
    >
      <Stack.Screen name="BottomTabs" component={BottomTabNavigation} />
    </Stack.Navigator>
  );
};
