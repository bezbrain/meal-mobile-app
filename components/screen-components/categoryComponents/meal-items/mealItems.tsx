import React from "react";
import {
  Pressable,
  Text,
  View,
  Image,
  StyleSheet,
  Platform,
  useWindowDimensions,
} from "react-native";
import shadowStyles from "../../../../styles/shadow";
import { dynamicGrid } from "../../../../utils/dynamicGrid";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Details, MealTitle } from "..";

// Define the type for the navigation route
type MealDetailsRouteParams = {
  mealId: string;
};

type RootStackParamList = {
  MealDetails: MealDetailsRouteParams;
  // Add other screens here if needed
};

interface MealItemsProps {
  id: string;
  title: string;
  imageUrl: string;
  complexity: string;
  affordability: string;
  duration: number;
}

const MealItems = ({
  id,
  title,
  imageUrl,
  complexity,
  affordability,
  duration,
}: MealItemsProps) => {
  const { width, height } = useWindowDimensions();

  const mealDescWidth: any = dynamicGrid("100%", "48%", "100%", height, width);
  const mealDescMargin: any = dynamicGrid(0, 10, 0, height, width);

  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  // NAVIGATE TO THE MEALS DETAILS SCREEN
  const handleMealDetailsPress = (id: string) => {
    navigation.navigate("MealDetails", {
      mealId: id,
    });
  };

  return (
    <View
      style={[
        styles.container,
        { width: mealDescWidth, marginHorizontal: mealDescMargin },
      ]}
    >
      <Pressable
        android_ripple={{ color: "#ded8d8" }}
        style={({ pressed }) => (pressed ? styles.activeMeal : null)}
        onPress={() => handleMealDetailsPress(id)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <MealTitle title={title} />
          </View>

          <Details
            complexity={complexity}
            duration={duration}
            affordability={affordability}
            title="remove"
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItems;

const isAndroid = Platform.OS === "android";

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    overflow: isAndroid ? "hidden" : "visible",
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 4,
    ...shadowStyles,
  },
  activeMeal: {
    opacity: 0.75,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
    width: "100%",
  },
  image: {
    width: "100%",
    height: 200,
  },
});
