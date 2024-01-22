import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Home, Save, Settings, Share } from "../screens";
import { theme as color } from "../constants";
import { Feather, Ionicons, FontAwesome } from "@expo/vector-icons";
import { scale } from "../utils";
import { View } from "react-native";
import { useTheme } from "react-native-paper";
import { Image } from "expo-image";
import { home1, home2 } from "../constants/images";

const Tab = createMaterialBottomTabNavigator();

export const BottomTabNavigation = () => {
  const theme = useTheme();

  theme.colors.secondaryContainer = "transperent";

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={color.black}
      inactiveColor={color.icon}
      barStyle={{ backgroundColor: color.gray }}
      screenOptions={{}}
      labeled={false}
      shifting={false}
      style={{
        backgroundColor: "white",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: "transparent",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Image
                source={focused ? home2 : home1}
                style={{
                  width: 24,
                  height: 24,
                }}
                cachePolicy={"memory-disk"}
              />
              {/* <Ionicons
                name={focused ? "home" : "home-outline"}
                size={scale.fontPixel(24)}
                color={color}
              /> */}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Save"
        component={Save}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: "transparent",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Ionicons
                name={focused ? "bookmark" : "bookmark-outline"}
                size={scale.fontPixel(22)}
                color={color}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Share"
        component={Share}
        options={{
          tabBarIcon: ({ _color, focused }) => (
            <View
              style={{
                backgroundColor: "transparent",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              {focused ? (
                <FontAwesome
                  name={"send"}
                  size={scale.fontPixel(20)}
                  color={color.black}
                />
              ) : (
                <Feather
                  name={"send"}
                  size={scale.fontPixel(20)}
                  color={color.icon}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: "transparent",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Ionicons
                name={focused ? "settings" : "settings-outline"}
                size={scale.fontPixel(22)}
                color={color}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
