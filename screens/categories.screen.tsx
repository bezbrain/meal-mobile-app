import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList, Text, View } from "react-native";
import { CategoryGridTile } from "../components/screen-components/categoryComponents";

const CategoriesScreen = () => {
  return (
    <View>
      <FlatList
        alwaysBounceVertical={true}
        data={CATEGORIES}
        renderItem={(eachObj) => (
          <CategoryGridTile
            title={eachObj.item.title}
            color={eachObj.item.color}
          />
        )}
        keyExtractor={(each) => each.id}
      />
    </View>
  );
};

export default CategoriesScreen;
