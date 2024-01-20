import {
  View,
  FlatList,
  TouchableOpacity,
  Text as BaseText,
} from "react-native";
import React from "react";
import { styles } from "./styles";
import { Image } from "expo-image";
import { google, onboard } from "../../constants/images";
import { data } from "./onboardData";
import { Text } from "../../components/common";
import { useNavigation } from "@react-navigation/native";

export const Onboarding = () => {
  const { navigate } = useNavigation();

  const RenderItems = ({ item, index }) => {
    return (
      <View>
        <View style={styles.imageContainer}>
          <Image
            source={onboard}
            contentFit="contain"
            cachePolicy={"memory-disk"}
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text
            text={item.text}
            textStyle={styles.mainText}
            numberOfLines={1}
            ellipsizeMode={"tail"}
          />
          <Text
            text={item.desc}
            textStyle={styles.descText}
            numberOfLines={2}
            ellipsizeMode={"tail"}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerCircle}>
        <View style={styles.circle} />
      </View>

      <View>
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <RenderItems item={item} index={index} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToAlignment="center"
          contentContainerStyle={{}}
        />
      </View>
      <View style={styles.dotContainer}>
        {data.map((item, index) => {
          return <View style={[styles.dotIndicator, {}]} />;
        })}
      </View>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigate("RootNavigation")}
        style={styles.btn}
      >
        <View style={styles.googleImageCon}>
          <Image
            source={google}
            style={styles.googleImage}
            cachePolicy={"memory-disk"}
            contentFit="contain"
          />
        </View>

        <Text text={"Login with Google"} textStyle={styles.btnText} />
      </TouchableOpacity>

      <BaseText style={styles.signUpBaseText}>
        Don’t have any account?{" "}
        <Text text={"Sign up"} style={styles.signUpText} />
      </BaseText>
    </View>
  );
};
