import React from "react";
import {
  Pressable,
  Text,
  View,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import shadowStyles from "../../../../styles/shadow";

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
  return (
    <View style={styles.container}>
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
