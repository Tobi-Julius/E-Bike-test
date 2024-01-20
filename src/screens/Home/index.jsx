import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

export const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.headercontainer}>
        <View style={styles.userImageCon}>
          <Image />
        </View>
        <View style={styles.notiIconCon}>
          <Image />
        </View>
      </View>
    </SafeAreaView>
  );
};
