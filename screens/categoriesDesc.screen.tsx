import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";

const CategoriesDescScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Categories description</Text>
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
