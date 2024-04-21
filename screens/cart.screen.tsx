import React, { useLayoutEffect } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
} from "react-native";
import { useScreenContext } from "../contexts/screen.context";
import MealItems from "../components/screen-components/categoryComponents/meal-items/mealItems";
import { dynamicGrid } from "../utils/dynamicGrid";
import { useNavigation } from "@react-navigation/native";
import { IconButton } from "../components/screen-components/categoryComponents";

const CartScreen = () => {
  const { cartArr } = useScreenContext();

  const navigation: any = useNavigation();

  const { width, height } = useWindowDimensions();

  //   DYNAMICALLY ADD FLEX ROW TO THE SCREEN CONTINER
  const flexContainer: any = dynamicGrid(1, 2, 1, height, width);

  // GO HOME WHEN HOME ICON IS CLICKED
  const handleGoHome = () => {
    navigation.navigate("Categories");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton icon="home" color="white" handlePress={handleGoHome} />
        );
      },
    });
  }, [navigation]);

  if (cartArr.length === 0) {
    return (
      <View style={styles.noItemContainer}>
        <Text style={styles.noItem}>NO ITEMS IN CART</Text>
      </View>
    );
  }

  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={cartArr}
        renderItem={(eachObj) => {
          const { id, title, imageUrl, complexity, affordability, duration } =
            eachObj.item;
          return (
            <MealItems
              key={id}
              id={id}
              title={title}
              imageUrl={imageUrl}
              complexity={complexity}
              affordability={affordability}
              duration={duration}
            />
          );
        }}
        keyExtractor={(each) => each.id}
        numColumns={flexContainer}
        key={flexContainer}
      />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 8,
  },
  noItemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noItem: {
    color: "white",
    fontSize: 20,
  },
});
