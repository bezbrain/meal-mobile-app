import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import { CategoriesDescScreen, CategoriesScreen } from "./screens";
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
      <ScreenProvider>
        <NavigationContainer>
          <View style={[styles.container, appPaddingStyles]}>
            <Stack.Navigator initialRouteName="MealsCategories">
              <Stack.Screen
                name="MealsCategories"
                component={CategoriesScreen}
              />
              <Stack.Screen
                name="MealsDescription"
                component={CategoriesDescScreen}
              />
            </Stack.Navigator>
          </View>
        </NavigationContainer>
      </ScreenProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
