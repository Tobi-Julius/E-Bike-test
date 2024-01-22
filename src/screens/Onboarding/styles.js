import { StyleSheet } from "react-native";
import { theme } from "../../constants";
import { scale } from "../../utils";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.primary,
    flex: 1,
  },
  innerCircle: {
    height: "68%",
    width: "145%",
    borderRadius: "50%",
    position: "absolute",
  },
  linesContainer: {
    position: "absolute",
    top: -4,
    right: -5,
    width: scale.widthPixel(160),
    height: scale.heightPixel(180),
  },
  lines: {
    width: "100%",
    height: "100%",
  },
  circle: {
    backgroundColor: "#FFCE23",
    height: "100%",
    width: "100%",
    borderRadius: 700,
    right: "50%",
    bottom: "10%",
  },
  imageContainer: {
    height: scale.heightPixel(237),
    width: scale.width,
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: scale.heightPixel(130),
  },
  image: {
    height: "100%",
    width: "80%",
  },
  mainText: {
    fontSize: scale.size.h1,
    color: theme.black,
    textAlign: "center",
    fontFamily: "Inter_600SemiBold",
  },
  descText: {
    fontSize: scale.size.h6,
    color: theme.black,
    textAlign: "center",
    fontFamily: "Inter_400Regular",
    marginTop: scale.pixelSizeVertical(2),
  },
  textContainer: {
    alignItems: "center",
    width: "100%",
    marginTop: scale.heightPixel(85),
  },
  dotContainer: {
    alignSelf: "center",
    flexDirection: "row",
    marginTop: scale.pixelSizeVertical(23),
  },
  dotIndicator: {
    backgroundColor: theme.white,
    height: scale.heightPixel(3),
    width: scale.widthPixel(5),
    marginLeft: scale.pixelSizeHorizontal(8),
    borderRadius: 100 / 2,
  },
  btnText: {
    fontSize: scale.size.h6,
    color: theme.white,
    textAlign: "center",
    fontFamily: "Inter_500Medium",
    textAlignVertical: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: "80%",
  },
  googleImage: {
    height: scale.heightPixel(24),
    width: scale.widthPixel(24),
    textAlignVertical: "center",
    justifyContent: "flex-start",
  },
  btn: {
    height: scale.heightPixel(56),
    width: "80%",
    backgroundColor: theme.black,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 100 / 2,
    marginVertical: scale.pixelSizeVertical(48),
  },
  googleImageCon: {
    alignSelf: "center",
    backgroundColor: theme.white,
    padding: scale.fontPixel(7),
    borderRadius: 100 / 2,
    marginLeft: scale.pixelSizeHorizontal(8),
  },
  signUpBaseText: {
    fontSize: scale.size.h6,
    color: theme.black,
    fontFamily: "Inter_500Medium",
    textAlign: "center",
  },
  signUpText: {
    fontSize: scale.size.h6,
    color: theme.black,
    textAlign: "center",
    fontFamily: "Inter_600SemiBold",
  },
});
