import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { CategoriesScreen } from "./screens";
import { ScreenProvider } from "./contexts/screen.context";
import { appFonts } from "./utils/fonts";
import AppLoading from "expo-app-loading";

export default function App() {
  const { width, height } = useWindowDimensions();

  // Dynamic vertical padding for the whole application
  const appPaddingStyles = {
    paddingVertical: width < 360 ? 52 : height < 400 ? 12 : 52,
  };

  const fontsLoaded = appFonts();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScreenProvider>
      <View style={[styles.container, appPaddingStyles]}>
        <StatusBar style="light" />
        <SafeAreaView>
          <CategoriesScreen />
        </SafeAreaView>
      </View>
    </ScreenProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingVertical: 52,
  },
});
