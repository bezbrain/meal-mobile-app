import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import { CategoriesScreen } from "./screens";
import { ScreenProvider } from "./contexts/screen.context";
import { appFonts } from "./utils/fonts";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

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
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <ScreenProvider>
          <View style={[styles.container, appPaddingStyles]}>
            <Stack.Navigator>
              <Stack.Screen
                name="Meals Categories"
                component={CategoriesScreen}
              />
            </Stack.Navigator>
          </View>
        </ScreenProvider>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
