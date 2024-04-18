import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface CategoryCardProps {
  title: string;
  color: string;
}

const CategoryCard = ({ title, color }: CategoryCardProps) => {
  return (
    <View style={style.gridItemContainer}>
      <Pressable style={style.pressableContainer}>
        <View style={style.innerContainer}>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryCard;

const style = StyleSheet.create({
  gridItemContainer: {
    flex: 1,
    margin: 10,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
    backgroundColor: "white",
  },
  pressableContainer: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
