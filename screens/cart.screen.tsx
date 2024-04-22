import React, { useLayoutEffect } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  useWindowDimensions,
  Alert,
  Button,
} from "react-native";
import { useScreenContext } from "../contexts/screen.context";
import MealItems from "../components/screen-components/categoryComponents/meal-items/mealItems";
import { dynamicGrid } from "../utils/dynamicGrid";
import { useNavigation } from "@react-navigation/native";
import { Icons, NoItem } from "../components/general";

const CartScreen = () => {
  const { cartArr, setCartArr } = useScreenContext();

  const navigation: any = useNavigation();

  const { width, height } = useWindowDimensions();

  //   DYNAMICALLY ADD FLEX ROW TO THE SCREEN CONTINER
  const flexContainer: any = dynamicGrid(1, 2, 1, height, width);

  // GO HOME WHEN HOME ICON IS CLICKED
  const handleGoHome = () => {
    navigation.navigate("Categories");
  };

  const deleteAll = () => {
    setCartArr([]);
    Alert.alert("Cart cleared", "All items have been removed", [
      { text: "OK", style: "cancel" },
    ]);
  };

  const handleDeleteAll = () => {
    Alert.alert(
      "Cart Removal",
      "Are you sure you want to remove all items from the cart?",
      [
        { text: "NO", style: "cancel" },
        { text: "YES", onPress: deleteAll },
      ]
    );
  };

  const handleSingleDelete = (id: string) => {
    Alert.alert(
      "Item deleted!",
      "An item has been successfully deleted from cart",
      [{ text: "OK", style: "cancel" }]
    );
    const newCartArr = cartArr.filter((each: { id: string }) => each.id !== id);
    setCartArr(newCartArr);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Icons
            handleDeleteAll={handleDeleteAll}
            handleGoHome={handleGoHome}
          />
        );
      },
    });
  }, [navigation]);

  if (cartArr.length === 0) {
    return <NoItem value="CART" />;
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
              button={
                <Button
                  title="remove"
                  color="#351401"
                  onPress={() => handleSingleDelete(id)}
                />
              }
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
});
