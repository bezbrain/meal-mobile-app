import React from "react";
import { Pressable, Text, View } from "react-native";

interface CategoryGridTileProps {
  title: string;
  color: string;
}

const CategoryGridTile = ({ title, color }: CategoryGridTileProps) => {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;
