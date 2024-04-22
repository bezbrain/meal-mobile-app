import React, { useLayoutEffect } from "react";
import {
  FlatList,
  Text,
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

const FavouritesScreen = () => {
  const { favouriteArr, setFavouriteArr } = useScreenContext();

  const navigation: any = useNavigation();

  const { width, height } = useWindowDimensions();

  //   DYNAMICALLY ADD FLEX ROW TO THE SCREEN CONTINER
  const flexContainer: any = dynamicGrid(1, 2, 1, height, width);

  // GO HOME WHEN HOME ICON IS CLICKED
  const handleGoHome = () => {
    navigation.navigate("Categories");
  };

  const deleteAll = () => {
    setFavouriteArr([]);
    Alert.alert("Favourite cleared", "All items have been removed", [
      { text: "OK", style: "cancel" },
    ]);
  };

  const handleDeleteAll = () => {
    Alert.alert(
      "Favourite Removal",
      "Are you sure you want to remove all items from favourite?",
      [
        { text: "NO", style: "cancel" },
        { text: "YES", onPress: deleteAll },
      ]
    );
  };

  const handleSingleDelete = (id: string) => {
    Alert.alert(
      "Item deleted!",
      "An item has been successfully deleted from favourite",
      [{ text: "OK", style: "cancel" }]
    );
    const newFavouriteArr = favouriteArr.filter(
      (each: { id: string }) => each.id !== id
    );
    setFavouriteArr(newFavouriteArr);
  };

  // SET HEADER ICON
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

  if (favouriteArr.length === 0) {
    return <NoItem value="FAVOURITE" />;
  }

  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={favouriteArr}
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

export default FavouritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 8,
  },
});
