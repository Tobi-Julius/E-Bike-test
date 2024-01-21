import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { BottomTabNavigation } from "./BottomTabNavigation";
import { Location } from "../screens";

const Stack = createSharedElementStackNavigator();

export const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="BottomTabs"
    >
      <Stack.Screen name="BottomTabs" component={BottomTabNavigation} />
      <Stack.Screen name="Location" component={Location} />
    </Stack.Navigator>
  );
};
