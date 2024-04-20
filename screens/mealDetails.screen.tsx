import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MealDetailsScreen = () => {
  const route = useRoute<RouteProp<any>>();

  const detailsIdParam = route.params?.mealId;

  return (
    <View>
      <Text style={styles.text}>Meals Details - {detailsIdParam}</Text>
    </View>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  container: {
    //
  },
  text: {
    color: "white",
  },
});
