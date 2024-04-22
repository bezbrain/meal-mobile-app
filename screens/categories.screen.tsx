import React, { useEffect } from "react";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList, View, useWindowDimensions } from "react-native";
import { CategoryCard } from "../components/screen-components/categoryComponents";
import { useScreenContext } from "../contexts/screen.context";
import { dynamicGrid } from "../utils/dynamicGrid";

const CategoriesScreen = () => {
  const { categoryColumns, setCategoryColumns, setIsFavCart } =
    useScreenContext();

  const { width, height } = useWindowDimensions();

  // DYNAMIC PADDING BOTTOM FOR THE MEAL CATEGORY
  const catPaddingStyles = {
    paddingBottom: width < 360 ? 32 : height < 400 ? 12 : 32,
  };

  //   DYNAMICALLY ADD GRIP COLUMNS
  useEffect(() => {
    const columns = dynamicGrid(2, 4, 2, height, width);
    setCategoryColumns(columns);
  }, [width, height]);

  useEffect(() => {
    setIsFavCart(false); // Remove button
  }, []);

  return (
    <View style={catPaddingStyles}>
      <FlatList
        alwaysBounceVertical={true}
        data={CATEGORIES}
        renderItem={(eachObj) => (
          <CategoryCard
            title={eachObj.item.title}
            color={eachObj.item.color}
            id={eachObj.item.id}
          />
        )}
        keyExtractor={(each) => each.id}
        numColumns={categoryColumns}
        key={categoryColumns} /*Force re-render when numColumns changes*/
      />
    </View>
  );
};

export default CategoriesScreen;
