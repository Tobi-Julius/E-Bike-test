import { View } from "react-native";
import React, {
  useCallback,
  useMemo,
  useRef,
  useEffect,
  useState,
} from "react";
import {} from "expo-image";
import { styles } from "./styles";
import { location } from "../../constants/images";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { scale } from "../../utils";
import { Text } from "../../components/common";
import BottomSheet from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { ModalContent } from "./ModalContent";
import { Image } from "expo-image";

export const Location = () => {
  const { goBack } = useNavigation();
  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["13%", "85%"], []);

  const [index, setIndex] = useState(0);

  // callbacks
  const handlePresentModalPress = useCallback(
    (index) => {
      bottomSheetModalRef.current?.snapToIndex(index === -1 ? 0 : index);
    },
    [index]
  );

  useEffect(() => {
    let unsubcribe = true;
    if (unsubcribe) {
      handlePresentModalPress(index === -1 ? 0 : index);
    }
    return () => (unsubcribe = false);
  }, [index]);

  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
    setIndex(index);
  }, []);

  const renderBackdrop = useCallback(
    (props) => (
      <View />
      // <BottomSheetBackdrop
      //   {...props}
      //   disappearsOnIndex={0}
      //   appearsOnIndex={1}
      //   animatedPosition={0}
      //   animatedIndex={index}
      //   pressBehavior={index === 1 ? "collapse" : "close"}
      //   // onPress={()=>{}}
      // />
    ),
    [index]
  );

  return (
    <View style={{ flex: 1 }}>
      <Image source={location} style={styles.imageBackground} />
      <SafeAreaView style={styles.headerContainer}>
        <Ionicons
          name="chevron-back"
          color={"#3B4A66"}
          size={scale.fontPixel(23)}
          onPress={() => goBack()}
        />
        <Text text={"Tracking Details"} textStyle={styles.topText} />
        <View />
      </SafeAreaView>

      <View style={styles.outter}>
        <View style={styles.inner}>
          <Text text={"SCP6653728497"} textStyle={styles.id} />
        </View>
      </View>
      <BottomSheet
        // enabledBottomClamp={false}
        // enableDismissOnClose={false}
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        onDismiss={() => handlePresentModalPress()}
        enabledGestureInteraction={true}
        enableHandlePanningGesture={true}
        enableContentPanningGesture={false}
        backdropComponent={() => renderBackdrop()}
        handleIndicatorStyle={{
          backgroundColor: "#DBE2E9",
          paddingVertical: scale.pixelSizeHorizontal(3),
          paddingHorizontal: scale.pixelSizeHorizontal(22),
          marginVertical: scale.pixelSizeVertical(7),
        }}
      >
        <ModalContent />
      </BottomSheet>
    </View>
  );
};
