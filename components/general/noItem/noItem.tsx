import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface NoItemProp {
  value: string;
}

const NoItem = ({ value }: NoItemProp) => {
  return (
    <View style={styles.noItemContainer}>
      <Text style={styles.noItem}>NO ITEMS IN {value}</Text>
    </View>
  );
};

export default NoItem;

const styles = StyleSheet.create({
  noItemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noItem: {
    color: "white",
    fontSize: 20,
  },
});
