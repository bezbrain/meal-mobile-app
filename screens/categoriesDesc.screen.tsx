import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";
import { MealItems } from "../components/screen-components/categoryComponents";

const CategoriesDescScreen = () => {
  const route = useRoute<RouteProp<any>>();
  const catParamId = route.params?.categoryId;

  const displayedMeals = MEALS.filter((each) => {
    return each.categoryIds.indexOf(catParamId) >= 0;
  });
  //   console.log(displayedMeals);

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={(eachObj) => {
          const { title, imageUrl, complexity, affordability, duration } =
            eachObj.item;
          return (
            <MealItems
              title={title}
              imageUrl={imageUrl}
              complexity={complexity}
              affordability={affordability}
              duration={duration}
            />
          );
        }}
        keyExtractor={(each) => each.id}
      />
    </View>
  );
};

export default CategoriesDescScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
