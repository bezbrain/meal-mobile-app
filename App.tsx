import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { CategoriesDescScreen, CategoriesScreen } from "./screens";
import { ScreenProvider } from "./contexts/screen.context";
import { appFonts } from "./utils/fonts";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  const fontsLoaded = appFonts();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="dark" />
      <ScreenProvider>
        <NavigationContainer>
          <View style={styles.container}>
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
