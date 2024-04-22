import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import {
  Details,
  IconButton,
  Line,
  MealTitle,
  MoreMealDetails,
} from "../components/screen-components/categoryComponents";
import { dynamicGrid } from "../utils/dynamicGrid";
import { useScreenContext } from "../contexts/screen.context";

const MealDetailsScreen = () => {
  const { favouriteArr, setFavouriteArr, cartArr, setCartArr } =
    useScreenContext();

  const route = useRoute<RouteProp<any>>();
  const navigation: any = useNavigation();
  const detailsIdParam = route.params?.mealId;

  // const [isMeal, setIsMeal] = useState<any>({});

  const { width, height } = useWindowDimensions();

  //   DYNAMICALLY ADD FLEX ROW TO THE SCREEN CONTINER
  const flexContainer: any = dynamicGrid(
    "column",
    "row",
    "column",
    height,
    width
  );
  //   DYNAMICALLY ADD WIDTH TO THE LHS CONTAINER
  const mealDetailsImageWidth: any = dynamicGrid(
    "100%",
    "48%",
    "100%",
    height,
    width
  );
  //   DYNAMICALLY ADD WIDTH TO THE LHS CONTAINER
  const mealDetailsPadding: any = dynamicGrid(48, 24, 48, height, width);

  const containerStyle = {
    flexDirection: flexContainer,
    paddingBottom: mealDetailsPadding,
  };

  const findMeal = MEALS.find((each) => each.id === detailsIdParam);

  // ADD ITEM TO FAVOURITE
  const handleFavourite = () => {
    // setIsFavCart(true); // Show button

    // Check if the findMeal already exists in favouriteArr
    const isAlreadyFavourite = favouriteArr.some(
      (each: { id: string | undefined }) => each.id === findMeal?.id
    );

    if (isAlreadyFavourite) {
      Alert.alert("To Favourite", "Item already in favourite", [
        { text: "Cancel", style: "destructive" },
      ]);
    } else {
      setFavouriteArr((prevFav: any) => [...prevFav, findMeal]);
      Alert.alert("To Favourite", "Item successfully added to favourite", [
        { text: "OK", style: "cancel" },
      ]);
      // Navigate to the favourite screen when item is added to favourite successfully
      navigation.navigate("Favourites");
    }
  };

  const handleCart = () => {
    // setIsFavCart(true); // Show button

    // Check if the findMeal already exists in cartArr
    const isAlreadyCart = cartArr.some(
      (each: { id: string | undefined }) => each.id === findMeal?.id
    );

    if (isAlreadyCart) {
      Alert.alert("To Cart", "Item already in cart", [
        { text: "Cancel", style: "destructive" },
      ]);
    } else {
      setCartArr((prevCart: any) => [...prevCart, findMeal]);
      Alert.alert("To Cart", "Item successfully added to cart", [
        { text: "OK", style: "cancel" },
      ]);
      // Navigate to the cart screen when item is added to cart successfully
      navigation.navigate("Cart");
    }
  };

  // GO HOME WHEN HOMW ICON IS CLICKED
  const handleGoHome = () => {
    navigation.navigate("MealsCategories");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={styles.iconsHeader}>
            <IconButton
              icon="heart"
              color="red"
              handlePress={handleFavourite}
            />
            <IconButton
              icon="shoppingcart"
              color="white"
              handlePress={handleCart}
            />
            <IconButton icon="home" color="white" handlePress={handleGoHome} />
          </View>
        );
      },
    });
  }, [navigation]);

  useEffect(() => {
    // setIsFavCart(false); // Remove button
  }, []);

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={{ width: mealDetailsImageWidth }}>
        <Image source={{ uri: findMeal?.imageUrl }} style={styles.image} />
        <MealTitle title={findMeal?.title} />
        <Details
          duration={findMeal?.duration}
          complexity={findMeal?.complexity}
          affordability={findMeal?.affordability}
        />

        <Line />
      </View>

      <ScrollView>
        <MealTitle title="Ingredients" />
        <MoreMealDetails isMeal={findMeal?.ingredients} />

        <Line />

        <MealTitle title="Steps" />
        <MoreMealDetails isMeal={findMeal?.steps} />
      </ScrollView>
    </View>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: "100%",
    marginVertical: 16,
    marginHorizontal: 8,
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
    // paddingBottom: 48,
  },
  iconsHeader: {
    flexDirection: "row",
    gap: 16,
  },
  image: {
    // width: "100%",
    height: 200,
  },
});
