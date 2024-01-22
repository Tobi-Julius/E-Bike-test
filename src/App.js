import { StatusBar } from "expo-status-bar";
import NavigationContainer from "./navigation/NavigationContainer";
import { useFont } from "./customHooks/useFont";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export default function App() {
  const { isFontReady } = useFont();

  return (
    isFontReady && (
      <BottomSheetModalProvider>
        <StatusBar style="dark" />
        <NavigationContainer />
      </BottomSheetModalProvider>
    )
  );
}
