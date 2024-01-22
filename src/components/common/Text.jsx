import React from "react";
import { Text as MainText } from "react-native";

export const Text = ({
  text,
  color,
  textAlign,
  textStyle,
  letterSpacing,
  ellipsizeMode,
  numberOfLines,
  onPress,
  ...others
}) => {
  return (
    <MainText
      allowFontScaling={true}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      style={[color, textStyle, { letterSpacing: 0.5 }]}
      onPress={onPress}
      {...others}
    >
      {text}
    </MainText>
  );
};
