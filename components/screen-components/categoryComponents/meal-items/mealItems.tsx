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

interface MealItemsProps {
  title: string;
  imageUrl: string;
  complexity: string;
  affordability: string;
  duration: number;
}

const MealItems = ({
  title,
  imageUrl,
  complexity,
  affordability,
  duration,
}: MealItemsProps) => {
  const { width, height } = useWindowDimensions();

  const mealDescWidth: any = dynamicGrid("100%", "48%", "100%", height, width);
  const mealDescMargin: any = dynamicGrid(0, 10, 0, height, width);

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
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>

          <View style={styles.mealdetailsContainer}>
            <Text style={styles.detailItems}>{duration}mins</Text>
            <Text style={styles.detailItems}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItems}>
              {affordability.toUpperCase()}
            </Text>
          </View>
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
    // marginHorizontal: 10,
    overflow: isAndroid ? "hidden" : "visible",
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 4,
    ...shadowStyles,
    // width: "48%",
    // borderWidth: 2,
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
    // borderRadius: 8,
  },
  title: {
    textAlign: "center",
    fontFamily: "roboto-bold",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 8,
  },
  mealdetailsContainer: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailItems: {
    fontSize: 12,
  },
});
