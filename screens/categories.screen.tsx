import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList, Text, View } from "react-native";
import { CategoryCard } from "../components/screen-components/categoryComponents";

const CategoriesScreen = () => {
  return (
    <View>
      <FlatList
        alwaysBounceVertical={true}
        data={CATEGORIES}
        renderItem={(eachObj) => (
          <CategoryCard title={eachObj.item.title} color={eachObj.item.color} />
        )}
        keyExtractor={(each) => each.id}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;
