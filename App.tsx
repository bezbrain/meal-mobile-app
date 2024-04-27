import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import {
  CartScreen,
  CategoriesDescScreen,
  CategoriesScreen,
  FavouritesScreen,
  MealDetailsScreen,
} from "./screens";
import { ScreenProvider } from "./contexts/screen.context";
import { appFonts } from "./utils/fonts";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CATEGORIES, MEALS } from "./data/dummy-data";
import {
  generalDrawerOptions,
  generalStackOptions,
  itemsTitles,
} from "./screens/screenOptions/options";
import { MaterialIcons } from "@expo/vector-icons";
import { useCallback, useEffect } from "react";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

interface RouteProps {
  route: any;
  navigation: any;
}

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={generalDrawerOptions}>
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerLabel: "Categories",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="category" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="favorite-border" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Cart"
        component={CartScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="add-shopping-cart" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const App = () => {
  const fontsLoaded = appFonts();

  // HANDLE INTIAL SCREEN DISPLAY WHEN ALL FONTS HAVE NOT BEEN LOADED
  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (error) {
        console.warn(error);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // This tells the splash screen to hide immediately!
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <ScreenProvider>
        <NavigationContainer onReady={onLayoutRootView}>
          <Stack.Navigator
            initialRouteName="MealsCategories"
            screenOptions={generalStackOptions}
          >
            <Stack.Screen
              name="MealsCategories"
              component={DrawerNavigator}
              options={{
                headerShown: false, // This is used to remove header
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
                  // Adding button to screen header, but this won't allow for interactivity. For interactivity, you can set the option in the screen component itself
                  // headerRight: () => {
                  //   return <Button title="Tap me!" />;
                  // },
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
