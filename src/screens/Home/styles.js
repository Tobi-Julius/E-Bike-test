import { StyleSheet, Platform } from "react-native";
import { scale } from "../../utils";
import { theme } from "../../constants";

export const styles = StyleSheet.create({
  headercontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: scale.pixelSizeHorizontal(24),
    marginTop: Platform.OS === "android" && scale.pixelSizeVertical(14),
  },
  userImageCon: {
    height: scale.heightPixel(44),
    width: scale.widthPixel(44),
    borderRadius: 100 / 2,
  },
  userImage: {
    width: "100%",
    height: "100%",
    borderRadius: 100 / 2,
  },
  notiIconCon: {
    height: scale.heightPixel(40),
    width: scale.widthPixel(35),
    borderRadius: 10,
  },
  notiImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  greetingsContainer: {
    paddingHorizontal: scale.pixelSizeHorizontal(24),
    marginTop: scale.pixelSizeVertical(Platform.OS === "android" ? 25 : 0),
  },
  greetings: {
    fontSize: scale.size.h3,
    color: theme.black,
    fontFamily: "Inter_700Bold",
  },
  imageContainer: {
    height: scale.heightPixel(265),
    width: scale.widthPixel(255),
    backgroundColor: theme.gray,
    borderRadius: scale.fontPixel(32),
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "87%",
    height: "91.2%",
  },
  dotContainer: {
    alignSelf: "center",
    flexDirection: "row",
    marginTop: scale.pixelSizeVertical(23),
  },
  dotIndicator: {
    backgroundColor: theme.black,
    height: scale.heightPixel(5),
    width: scale.widthPixel(5),
    marginLeft: scale.pixelSizeHorizontal(8),
    borderRadius: 100 / 2,
  },
  MainScreenCon: {
    marginTop: scale.pixelSizeVertical(23),
  },
  stripe: {
    backgroundColor: "#FFD337",
    width: "100%",
    height: scale.heightPixel(90),
    marginTop: scale.pixelSizeVertical(30),
    padding: scale.pixelSizeHorizontal(24),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  firstText: {
    fontSize: scale.size.h6,
    color: theme.black,
    fontFamily: "Inter_400Regular",
  },
  btnText: {
    fontSize: scale.size.h6,
    color: theme.white,
    fontFamily: "Inter_400Regular",
    marginRight: scale.pixelSizeHorizontal(12),
  },
  btn: {
    backgroundColor: theme.black,
    paddingHorizontal: scale.pixelSizeHorizontal(20),
    height: scale.heightPixel(46),
    flexDirection: "row",
    borderRadius: scale.fontPixel(52),
    alignItems: "center",
  },
  bottomContainer: {
    flexDirection: "row",
    paddingRight: scale.pixelSizeHorizontal(24),
    alignItems: "center",
    marginTop: scale.heightPixel(20),
  },
  bikerGifContainer: {
    height: scale.heightPixel(102),
    width: scale.widthPixel(161),
  },
  bikerGif: {
    width: "100%",
    height: "100%",
  },
  vieworderCon: {
    marginTop: scale.pixelSizeVertical(20),
    marginHorizontal: scale.pixelSizeHorizontal(24),
  },
  cardCon: {
    paddingHorizontal: scale.pixelSizeHorizontal(24),
    width: "100%",
    backgroundColor: "#FFD337",
    paddingTop: scale.pixelSizeVertical(15),
    paddingBottom: scale.pixelSizeVertical(20),
    borderRadius: scale.fontPixel(32),
  },
  title: {
    fontSize: scale.size.h3,
    color: theme.black,
    fontFamily: "Inter_600SemiBold",
    marginTop: scale.pixelSizeVertical(53),
    marginBottom: scale.pixelSizeVertical(5),
  },
  btnTrack: {
    backgroundColor: theme.black,
    paddingHorizontal: scale.pixelSizeHorizontal(24),
    flexDirection: "row",
    borderRadius: scale.fontPixel(52),
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: scale.pixelSizeVertical(10),
    height: scale.heightPixel(55),
  },
  trackContainer: {
    marginTop: scale.pixelSizeVertical(25),
  },
  trackImageContainer: {
    height: scale.heightPixel(56),
    width: scale.widthPixel(56),
    backgroundColor: theme.gray,
    borderRadius: 100 / 2,
    alignItems: "center",
    justifyContent: "center",
    // marginTop: scale.pixelSizeVertical(24),
  },
  trackImage: {
    height: "50%",
    width: "50%",
  },
  orderId: {
    fontSize: scale.size.h6,
    color: theme.black,
    fontFamily: "Inter_500Medium",
    marginBottom: scale.pixelSizeVertical(5),
  },
  status: {
    fontSize: scale.size.h6,
    color: "#7A809D",
    fontFamily: "Inter_400Regular",
  },
  imageStatusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  mainTrackContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: scale.heightPixel(56),
    marginTop: scale.pixelSizeVertical(24),
  },
  textContainer: {
    marginLeft: scale.pixelSizeHorizontal(18),
  },
});
