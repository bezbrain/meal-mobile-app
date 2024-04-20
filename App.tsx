import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { CategoriesDescScreen, CategoriesScreen } from "./screens";
import { ScreenProvider } from "./contexts/screen.context";
import { appFonts } from "./utils/fonts";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
  const fontsLoaded = appFonts();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="light" />
      <ScreenProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="MealsCategories"
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            <Stack.Screen
              name="MealsCategories"
              component={CategoriesScreen}
              options={{
                title: "All Categories",
              }}
            />
            <Stack.Screen
              name="MealsDescription"
              component={CategoriesDescScreen}
              options={{
                title: "Meals",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ScreenProvider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
