import React, { useEffect } from "react";
import { FlatList, StyleSheet, View, useWindowDimensions } from "react-native";
import { useRoute } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";
import { MealItems } from "../components/screen-components/categoryComponents";
import { useScreenContext } from "../contexts/screen.context";
import { dynamicGrid } from "../utils/dynamicGrid";

const CategoriesDescScreen = () => {
  const { mealItemsColumns, setMealItemsColumns } = useScreenContext();

  const route = useRoute<RouteProp<any>>();
  const catParamId = route.params?.categoryId;

  const { width, height } = useWindowDimensions();

  // FILTER BASED ON THE ID
  const displayedMeals = MEALS.filter((each) => {
    return each.categoryIds.indexOf(catParamId) >= 0;
  });

  //   DYNAMICALLY ADD GRIP COLUMNS
  useEffect(() => {
    const containerGrid = dynamicGrid(1, 2, 1, height, width);
    setMealItemsColumns(containerGrid);
  }, [width, height]);

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={(eachObj) => {
          const { id, title, imageUrl, complexity, affordability, duration } =
            eachObj.item;
          return (
            <MealItems
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
        numColumns={mealItemsColumns}
        key={mealItemsColumns} /*Force re-render when numColumns changes*/
      />
    </View>
  );
};

export default CategoriesDescScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    borderWidth: 2,
  },
});
