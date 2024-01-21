import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NavigationContainer from "./navigation/NavigationContainer";
import { useFont } from "./customHooks/useFont";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export default function App() {
  const { isFontReady } = useFont();

  return (
    isFontReady && (
      <BottomSheetModalProvider>
        <NavigationContainer />
      </BottomSheetModalProvider>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
