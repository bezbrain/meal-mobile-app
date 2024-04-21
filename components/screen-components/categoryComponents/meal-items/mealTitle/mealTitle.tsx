import React from "react";
import { StyleSheet, Text } from "react-native";

interface MealTitleProp {
  title: string | undefined;
}

const MealTitle = ({ title }: MealTitleProp) => {
  return <Text style={styles.title}>{title}</Text>;
};

export default MealTitle;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontFamily: "roboto-bold",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 8,
  },
});
