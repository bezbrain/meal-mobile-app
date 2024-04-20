import React from "react";
import { StyleSheet, View } from "react-native";

const Line = () => {
  return <View style={styles.horizontalLine}></View>;
};

export default Line;

const styles = StyleSheet.create({
  horizontalLine: {
    borderWidth: 1,
    margin: 16,
    opacity: 0.25,
  },
});
