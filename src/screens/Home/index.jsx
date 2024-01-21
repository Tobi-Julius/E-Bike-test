import { ScrollView, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { user, noti } from "../../constants/images";
import { theme } from "../../constants";
import { Text } from "../../components/common";
import { MainScreen } from "./MainScreen";
import { ViewOrder } from "./ViewOrder";

export const Home = () => {
  const [orderView, updateOrderView] = useState(false);
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: theme.white,
        }}
      >
        <View style={styles.headercontainer}>
          <View style={styles.userImageCon}>
            <Image
              source={user}
              contentFit="cover"
              cachePolicy={"memory-disk"}
              style={styles.userImage}
            />
          </View>
          <View style={styles.notiIconCon}>
            <Image
              source={noti}
              contentFit="contain"
              cachePolicy={"memory-disk"}
              style={styles.notiImage}
            />
          </View>
        </View>
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: theme.white,
        }}
      >
        <View style={styles.greetingsContainer}>
          <Text text={"Hello good Morning!"} textStyle={styles.greetings} />
        </View>
        {orderView ? (
          <ViewOrder />
        ) : (
          <MainScreen orderView={orderView} updateOrderView={updateOrderView} />
        )}
      </ScrollView>
    </>
  );
};
