import {
  View,
  FlatList,
  TouchableOpacity,
  Text as BaseText,
  Animated,
} from "react-native";
import React, { useCallback, useRef, useState } from "react";
import { styles } from "./styles";
import { Image } from "expo-image";
import { google, onboard, line1 } from "../../constants/images";
import { data } from "./onboardData";
import { Text } from "../../components/common";
import { useNavigation } from "@react-navigation/native";
import { scale } from "../../utils";
import { theme } from "../../constants";

export const Onboarding = () => {
  const { navigate } = useNavigation();

  const [currentIndex, setCurrentIndex] = useState(0);

  const ref = useRef(new Animated.Value(0));

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / scale.width);
    setCurrentIndex(currentIndex);
  };

  const RenderItems = useCallback(({ item, index }) => {
    return (
      <View style={{ flex: 1 }}>
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
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.linesContainer}>
        {[1, 2, 3].map((item, index) => (
          <Image
            key={item}
            source={line1}
            style={{
              position: "absolute",
              top: item === 1 ? -10 : item === 2 ? -13 : -16,
              right: item === 1 ? -10 : item === 2 ? -30 : -33,
              width: scale.widthPixel(
                item === 1 ? 180 : item === 2 ? 170 : 150
              ),
              height: scale.heightPixel(180),
            }}
            cachePolicy={"memory-disk"}
          />
        ))}
      </View>
      <View style={styles.innerCircle}>
        <View style={styles.circle} />
      </View>

      <View>
        <Animated.FlatList
          ref={ref}
          data={data}
          renderItem={({ item, index }) => (
            <RenderItems item={item} index={index} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToAlignment="center"
          contentContainerStyle={{}}
          onMomentumScrollEnd={updateCurrentSlideIndex}
        />
      </View>
      <View style={styles.dotContainer}>
        {data.map((item, index) => {
          return (
            <View
              style={[
                styles.dotIndicator,
                currentIndex === index && {
                  height: scale.heightPixel(7),
                  width: scale.widthPixel(7),
                  backgroundColor: theme.black,
                },
              ]}
              key={item.id}
            />
          );
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
        Don’t have any account?{"  "}
        <Text text={"Sign up"} style={styles.signUpText} />
      </BaseText>
    </View>
  );
};
