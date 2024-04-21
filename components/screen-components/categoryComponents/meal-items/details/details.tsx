import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface DetailsProps {
  duration: number | undefined;
  complexity: string | undefined;
  affordability: string | undefined;
}

const Details = ({ duration, complexity, affordability }: DetailsProps) => {
  return (
    <View style={styles.mealdetailsContainer}>
      <Text style={styles.detailItems}>{duration}mins</Text>
      <Text style={styles.detailItems}>{complexity?.toUpperCase()}</Text>
      <Text style={styles.detailItems}>{affordability?.toUpperCase()}</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  mealdetailsContainer: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailItems: {
    fontSize: 12,
    fontFamily: "roboto-regular",
  },
});
