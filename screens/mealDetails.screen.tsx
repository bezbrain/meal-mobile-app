import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import {
  Details,
  MealTitle,
} from "../components/screen-components/categoryComponents";

// Define the type for the navigation route
// type MealDetailsRouteParams = {
//   mealId: string;
// };

const MealDetailsScreen = () => {
  const route = useRoute<RouteProp<any>>();
  const detailsIdParam = route.params?.mealId;

  const [isMeal, setIsMeal] = useState<any>({});

  useEffect(() => {
    const findMeal = MEALS.find((each) => each.id === detailsIdParam);
    //   console.log(findMeal);
    setIsMeal(findMeal);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={{ uri: isMeal?.imageUrl }} style={styles.image} />
      <MealTitle title={isMeal?.title} />
      <Details
        duration={isMeal?.duration}
        complexity={isMeal?.complexity}
        affordability={isMeal?.affordability}
      />
      <ScrollView>
        <MealTitle title="Ingredients" />
        {isMeal?.ingredients?.map((each: string, i: number) => {
          return (
            <View style={styles.listContainer} key={i}>
              <Text style={styles.listItems}>
                {i + 1}. {each}
              </Text>
            </View>
          );
        })}

        <MealTitle title="Steps" />
        {isMeal?.steps?.map((each: string, i: number) => {
          return (
            <View style={styles.listContainer} key={i}>
              <Text style={styles.listItems}>
                {i + 1}. {each}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: "100%",
    margin: 16,
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
    paddingBottom: 48,
    borderWidth: 2,
  },
  image: {
    width: "100%",
    height: 200,
  },
  listContainer: {
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
  listItems: {
    fontSize: 18,
    fontFamily: "roboto-regular",
  },
});
