import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import {
  CategoriesDescScreen,
  CategoriesScreen,
  MealDetailsScreen,
} from "./screens";
import { ScreenProvider } from "./contexts/screen.context";
import { appFonts } from "./utils/fonts";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CATEGORIES, MEALS } from "./data/dummy-data";
import { generalOptions, itemsTitles } from "./screens/screenOptions/options";

interface RouteProps {
  route: any;
  navigation: any;
}

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
            screenOptions={generalOptions}
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
              options={({ route, navigation }: RouteProps) => {
                const paramId = route.params?.categoryId;
                const newCategory = itemsTitles(CATEGORIES, paramId);

                return {
                  title: newCategory?.title,
                };
              }}
            />
            <Stack.Screen
              name="MealDetails"
              component={MealDetailsScreen}
              options={({ route, navigation }: RouteProps) => {
                const mealIdParam = route.params.mealId;
                const newMeal = itemsTitles(MEALS, mealIdParam);

                return {
                  title: newMeal?.title,
                };
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
