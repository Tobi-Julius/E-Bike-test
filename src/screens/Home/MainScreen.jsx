import { View, FlatList, TouchableOpacity } from "react-native";
import React, { useState, useRef, useMemo, useCallback } from "react";
import { data } from "./homeData";
import { Image } from "expo-image";
import { styles } from "./styles";
import { scale } from "../../utils";
import { Fontisto } from "@expo/vector-icons";
import { theme } from "../../constants";
import { Text } from "../../components/common";
import { biker } from "../../constants/gifs";

export const MainScreen = ({ updateOrderView, orderView }) => {
  const RenderItems = useCallback(({ item, index }) => {
    return (
      <View
        style={[
          styles.imageContainer,
          {
            marginRight:
              data.length === index + 1 ? scale.pixelSizeHorizontal(48) : 0,
          },
        ]}
      >
        <Image
          style={styles.image}
          source={item.image}
          cachePolicy={"memory-disk"}
          contentFit="cover"
        />
      </View>
    );
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const ref = useRef();

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / scale.widthPixel(255));
    setCurrentIndex(currentIndex);
  };

  return (
    <View style={styles.MainScreenCon}>
      <FlatList
        keyExtractor={(item) => item.id}
        snapToInterval={scale.widthPixel(255)}
        ref={ref}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item, index }) => (
          <RenderItems item={item} index={index} />
        )}
        contentContainerStyle={{
          marginLeft: scale.pixelSizeHorizontal(24),
          gap: scale.pixelSizeHorizontal(10),
          // width: scale.width,
        }}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        lockScrollWhileSnapping={true}
      />
      <View style={styles.dotContainer}>
        {data.map((item, index) => {
          return (
            <View
              key={item.id}
              style={[
                styles.dotIndicator,
                currentIndex === index && {
                  height: scale.heightPixel(5),
                  width: scale.widthPixel(5),
                  marginLeft: scale.pixelSizeHorizontal(8),
                  backgroundColor: theme.black,
                },
              ]}
            />
          );
        })}
      </View>
      <View style={styles.stripe}>
        <Text
          text={"Gotten your \nE-Bike yet?"}
          ellipsizeMode={"tail"}
          numberOfLines={2}
        />
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => updateOrderView(!orderView)}
          style={styles.btn}
        >
          <Text
            text={"Your Orders"}
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
      <View style={styles.bottomContainer}>
        <View style={styles.bikerGifContainer}>
          <Image
            source={biker}
            style={styles.bikerGif}
            cachePolicy={"memory"}
            contentFit="cover"
          />
        </View>
        <Text text={"You too can join our \n Elite squad of E-bikers"} />
      </View>
    </View>
  );
};
