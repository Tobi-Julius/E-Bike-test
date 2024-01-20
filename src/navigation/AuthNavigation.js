import { View, Text } from "react-native";
import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { Onboarding } from "../screens/Onboarding";

const Stack = createSharedElementStackNavigator();

export const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
    </Stack.Navigator>
  );
};
