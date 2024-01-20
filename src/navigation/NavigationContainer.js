import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer as MainNavigation } from "@react-navigation/native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { AuthNavigation } from "./AuthNavigation";
import { RootNavigation } from "./RootNavigation";

const Stack = createSharedElementStackNavigator();

export const NavigationContainer = () => {
  return (
    <MainNavigation>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
        <Stack.Screen name="RootNavigation" component={RootNavigation} />
      </Stack.Navigator>
    </MainNavigation>
  );
};

export default NavigationContainer;
