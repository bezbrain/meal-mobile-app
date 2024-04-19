import React, { useEffect } from "react";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList, View, useWindowDimensions } from "react-native";
import { CategoryCard } from "../components/screen-components/categoryComponents";
import { useScreenContext } from "../contexts/screen.context";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Assuming your navigation stack is defined as StackNavigator
type StackParamList = {
  MealsDescription: undefined; // Define your screen names here
  // Add other screen names as needed
};

type CategoriesScreenNavigationProp = NativeStackNavigationProp<
  StackParamList,
  "MealsDescription"
>;

interface CategoriesScreenProps {
  navigation: CategoriesScreenNavigationProp;
}

const CategoriesScreen = ({ navigation }: CategoriesScreenProps) => {
  const { categoryColumns, setCategoryColumns } = useScreenContext();

  const { width, height } = useWindowDimensions();

  //   Dynamically add the grid columns
  useEffect(() => {
    let columns = 2;
    if (width < 360) {
      columns = 2;
    }
    if (height < 400) {
      columns = 4;
    }
    setCategoryColumns(columns);
  }, [width, height]);

  return (
    <View>
      <FlatList
        alwaysBounceVertical={true}
        data={CATEGORIES}
        renderItem={(eachObj) => (
          <CategoryCard
            title={eachObj.item.title}
            color={eachObj.item.color}
            navigation={navigation}
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
