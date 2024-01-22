import { TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { Text } from "../../components/common";
import { Entypo } from "@expo/vector-icons";
import { scale } from "../../utils";
import { Image } from "expo-image";
import { data } from "./historyData";
import { theme } from "../../constants";

export const ModalContent = () => {
  const [index, setIndex] = useState(0);

  return (
    <View style={styles.modalContainer}>
      <View style={styles.topContainer}>
        <View>
          <Text text={"Estimate arrives in"} textStyle={styles.arrive} />
          <Text text={"2h 40m"} textStyle={styles.date} />
        </View>
        <Entypo
          name="dots-two-horizontal"
          size={scale.fontPixel(18)}
          color="black"
        />
      </View>
      <View style={styles.cardContainer}>
        <Text text={"Sukabumi, Indonesia"} textStyle={styles.title} />
        <Text text={"No receipt : SCP6653728497"} textStyle={styles.address} />
        <View style={styles.separation} />

        <Text text={"2,50 USD"} textStyle={styles.title} />
        <Text text={"Postal fee"} textStyle={styles.address} />
        <View style={styles.separation} />

        <Text text={"Bali, Indonesia"} textStyle={styles.title} />
        <Text text={"Parcel, 24kg"} textStyle={styles.address} />
      </View>
      <Text text={"History"} textStyle={styles.history} />

      {data.map((item, _index) => (
        <View key={item.id}>
          <View style={styles.historyContainer}>
            <View style={styles.combine}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={[
                  styles.container,
                  {
                    backgroundColor:
                      index === _index ? theme.primary : theme.gray,
                  },
                ]}
                onPress={() => setIndex(_index)}
              >
                <Image
                  source={item.image}
                  style={styles.image}
                  cachePolicy={"memory-disk"}
                  contentFit="contain"
                />
              </TouchableOpacity>
              <View style={styles.textContainer}>
                <Text text={item.title} textStyle={styles.text} />
                <Text text={item.location}  textStyle={styles.location}/>
              </View>
            </View>
            <Text text={item.time} textStyle={styles.time}/>
          </View>
          {data.length === _index + 1 ? null : (
            <View style={styles.lineContainer}>
              <View style={styles.line} />
            </View>
          )}
        </View>
      ))}
    </View>
  );
};
