import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("screen");

// base dimensions for apple iphone 11 pro/x/xs  w: 315, h: 812

const designHeight = 812;
const designWidth = 375;

const widthBaseScale = width / designWidth;
const heightBaseScale = height / designHeight;

export const normalize = (size, based) => {
  const newSize =
    based === "height" ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// for screen height

const heightPixel = (size) => {
  return normalize(size, "height");
};

// for screen width

const widthPixel = (size) => {
  return normalize(size, "width");
};

// vertical padding and margin

const pixelSizeVertical = (size) => {
  return heightPixel(size);
};

// horizontal padding and margin

const pixelSizeHorizontal = (size) => {
  return widthPixel(size);
};

// fonts

const fontPixel = (size) => {
  return heightPixel(size);
};

const fontSize = {
  h1: normalize(24),
  h2: normalize(20),
  h3: normalize(18),
  h4: normalize(16),
  h5: normalize(14), //24,14,18
};

const lineHeight = {
  lineHeight1: normalize(30),
  lineHeight2: normalize(23),
  lineHeight3: normalize(20),
  lineHeight4: normalize(18),
  lineHeight5: normalize(15),
};

export const scale = {
  width,
  height,
  fontPixel,
  widthPixel,
  heightPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
  size: {
    h1: fontSize.h1,
    h2: fontSize.h2,
    h3: fontSize.h3,
    h4: fontSize.h4,
    h5: fontSize.h5,
    h6: fontSize.h6,
    isSmallDevice: width <= 375,
  },
  lineSize: {
    lh1: lineHeight.lineHeight1,
    lh2: lineHeight.lineHeight2,
    lh3: lineHeight.lineHeight3,
    lh4: lineHeight.lineHeight4,
    lh5: lineHeight.lineHeight5,
  },
};
