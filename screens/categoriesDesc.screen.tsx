import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";

const CategoriesDescScreen = () => {
  const route = useRoute<RouteProp<any>>();

  const catParamId = route.params?.categoryId;

  return (
    <View style={styles.container}>
      <Text>Categories description - {catParamId}</Text>
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
