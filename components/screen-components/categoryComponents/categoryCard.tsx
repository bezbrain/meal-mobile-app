import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import shadowStyles from "../../../styles/shadow";

// Define the type for the navigation route
type MealsDescriptionRouteParams = {
  categoryId: string;
};

type RootStackParamList = {
  MealsDescription: MealsDescriptionRouteParams;
  // Add other screens here if needed
};

interface CategoryCardProps {
  id: string;
  title: string;
  color: string;
}

const CategoryCard = ({ id, title, color }: CategoryCardProps) => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const handleCategoryPress = (id: string) => {
    navigation.navigate("MealsDescription", {
      categoryId: id,
    });
  };

  return (
    <View style={style.gridItemContainer}>
      <Pressable
        style={({ pressed }) => [
          pressed ? style.activePress : null,
          style.pressableContainer,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={() => handleCategoryPress(id)}
      >
        <View style={[style.innerContainer, { backgroundColor: color }]}>
          <Text style={style.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryCard;

const isAndroid = Platform.OS === "android";

const style = StyleSheet.create({
  gridItemContainer: {
    flex: 1,
    margin: 10,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    ...shadowStyles,
    backgroundColor: "white",
    overflow: isAndroid ? "hidden" : "visible",
  },
  pressableContainer: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontFamily: "roboto-bold",
  },
  activePress: {
    opacity: 0.5,
    borderRadius: 8,
  },
});
