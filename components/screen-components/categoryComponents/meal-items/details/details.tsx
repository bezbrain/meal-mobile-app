import React, { ReactNode } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useScreenContext } from "../../../../../contexts/screen.context";

interface DetailsProps {
  duration: number | undefined;
  complexity: string | undefined;
  affordability: string | undefined;
  button?: ReactNode;
}

const Details = ({
  duration,
  complexity,
  affordability,
  button,
}: DetailsProps) => {
  return (
    <View style={styles.mealdetailsContainer}>
      <Text style={styles.detailItems}>{duration}mins</Text>
      <Text style={styles.detailItems}>{complexity?.toUpperCase()}</Text>
      <Text style={styles.detailItems}>{affordability?.toUpperCase()}</Text>
      <View>{button}</View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  mealdetailsContainer: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  detailItems: {
    fontSize: 12,
    fontFamily: "roboto-regular",
  },
});
