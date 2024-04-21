import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface MoreMealDetailsProp {
  isMeal: string[] | undefined;
}

const MoreMealDetails = ({ isMeal }: MoreMealDetailsProp) => {
  return (
    <>
      {isMeal?.map((each: string, i: number) => {
        return (
          <View style={styles.listContainer} key={i}>
            <Text style={styles.listItems}>
              {i + 1}. {each}
            </Text>
          </View>
        );
      })}
    </>
  );
};

export default MoreMealDetails;

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
  listItems: {
    fontSize: 18,
    fontFamily: "roboto-regular",
  },
});
