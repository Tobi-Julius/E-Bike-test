import { TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Text } from "../../components/common";
import { theme } from "../../constants";
import { scale } from "../../utils";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import { trackData } from "./trackData";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { lines } from "../../constants/images";

export const ViewOrder = ({ updateOrderView, orderView }) => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.vieworderCon}>
      <View style={styles.cardCon}>
        <View style={styles.linesContainer}>
          <Image
            source={lines}
            style={styles.lines}
            cachePolicy={"memory-disk"}
          />
        </View>
        <Text text={"Track Your Package"} textStyle={styles.title} />
        <Text
          textStyle={styles.firstText}
          text={"Enter the receipt number that has \nbeen given by the officer"}
        />
        <TextInput
          placeholder="Enter the receipt number"
          placeholderTextColor={theme.black}
          keyboardType="numeric"
          style={{
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: theme.black,
            height: scale.heightPixel(55),
            borderRadius: scale.fontPixel(52),
            paddingLeft: scale.pixelSizeHorizontal(24),
            marginTop: scale.pixelSizeVertical(29),
            fontSize: scale.size.h5,
            color: theme.black,
            fontFamily: "Inter_400Regular",
            letterSpacing: 1,
          }}
        />
        <TouchableOpacity
          style={styles.btnTrack}
          activeOpacity={0.9}
          onPress={() => navigate("Location")}
        >
          <Text
            text={"Track Now"}
            textStyle={styles.btnText}
            ellipsizeMode={"tail"}
            numberOfLines={2}
          />
          <Fontisto
            name="arrow-right-l"
            size={scale.fontPixel(12)}
            color={theme.white}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.trackContainer}>
        <Text text={"Tracking history"} textStyle={styles.track} />
        {trackData.map((item, index) => (
          <View key={item.id} style={styles.mainTrackContainer}>
            <View style={styles.imageStatusContainer}>
              <View style={styles.trackImageContainer}>
                <Image
                  style={styles.trackImage}
                  source={item.image}
                  contentFit="cover"
                  cachePolicy={"memory-disk"}
                />
              </View>
              <View style={styles.textContainer}>
                <Text text={item.orderId} textStyle={styles.orderId} />
                <Text text={item.status} textStyle={styles.status} />
              </View>
            </View>
            <Ionicons
              name="chevron-forward"
              color={"#1E3354"}
              size={scale.fontPixel(12)}
            />
          </View>
        ))}
      </View>
    </View>
  );
};
