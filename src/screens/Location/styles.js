import { Platform, StyleSheet } from "react-native";
import { scale } from "../../utils";
import { theme } from "../../constants";

export const styles = StyleSheet.create({
  imageBackground: {
    height: "100",
    width: scale.width,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  topText: {
    fontSize: scale.size.h3,
    fontFamily: "Inter_600SemiBold",
    color: theme.black,
    letterSpacing: 0.5,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: scale.pixelSizeHorizontal(24),
    marginTop: scale.pixelSizeVertical(15),
  },
  outter: {
    backgroundColor: theme.primary,
    alignSelf: "center",
    width: "93.6%",
    height: scale.heightPixel(88),
    borderRadius: 100 / 2,
    marginHorizontal: scale.pixelSizeHorizontal(24),
    alignItems: "center",
    justifyContent: "center",
    marginTop: scale.pixelSizeVertical(Platform.OS === "android" ? 59 : 5),
  },
  inner: {
    backgroundColor: theme.primary,
    alignSelf: "center",
    width: "84%",
    height: "60%",
    borderRadius: 100 / 2,
    borderWidth: 1,
    borderColor: theme.black,
    alignItems: "center",
    justifyContent: "center",
  },
  id: {
    fontSize: scale.size.h6,
    fontFamily: "Inter_500Medium",
    color: theme.black,
  },
  arrive: {
    fontSize: scale.size.h6,
    fontFamily: "Inter_500Medium",
    color: "#7A809D",
    marginTop: scale.pixelSizeVertical(5),
    letterSpacing: 0.5,
  },
  date: {
    fontSize: scale.size.h3,
    fontFamily: "Inter_600SemiBold",
    color: theme.black,
    letterSpacing: 0.5,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modalContainer: {
    paddingHorizontal: scale.pixelSizeHorizontal(24),
    paddingBottom: scale.heightPixel(16),
  },
  cardContainer: {
    width: "100%",
    backgroundColor: "#FFD337",
    // height: scale.heightPixel(238),
    marginTop: scale.pixelSizeVertical(30),
    borderRadius: scale.fontPixel(24),
    paddingHorizontal: scale.pixelSizeHorizontal(24),
    paddingTop: scale.pixelSizeVertical(12),
    paddingBottom: scale.pixelSizeVertical(24),
  },
  title: {
    fontSize: scale.size.h4,
    fontFamily: "Inter_500Medium",
    color: theme.black,
    marginTop: scale.pixelSizeVertical(8),
  },
  address: {
    fontSize: scale.fontPixel(12),
    fontFamily: "Inter_400Regular",
    color: "#96823D",
    marginTop: scale.pixelSizeVertical(5),
  },
  separation: {
    borderTopColor: "#96823D",
    borderTopWidth: scale.fontPixel(1),
    marginVertical: scale.pixelSizeVertical(12),
  },
  history: {
    fontSize: scale.size.h4,
    fontFamily: "Inter_600SemiBold",
    color: theme.black,
    marginTop: scale.pixelSizeVertical(24),
    marginBottom: scale.pixelSizeVertical(14),
  },
  historyContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: {
    backgroundColor: theme.primary,
    height: scale.heightPixel(50),
    width: scale.widthPixel(50),
    borderRadius: 100 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: "60%",
    width: "60%",
  },
  combine: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: scale.pixelSizeHorizontal(15),
  },
  lineContainer: {
    width: scale.widthPixel(50),
  },
  line: {
    borderWidth: scale.fontPixel(0.8),
    height: scale.heightPixel(35),
    borderColor: "#DFE6ED",
    alignSelf: "center",
  },

  text: {
    fontSize: scale.size.h6ƒ,
    color: theme.black,
    fontFamily: "Inter_600SemiBold",
  },
  time: {
    color: "#7A809D",
    fontFamily: "Inter_400Regular",
    marginRight: scale.pixelSizeHorizontal(12),
  },
  location: {
    color: "#7A809D",
    fontFamily: "Inter_400Regular",
    marginRight: scale.pixelSizeHorizontal(12),
    marginTop: scale.pixelSizeVertical(5),
  },
});
