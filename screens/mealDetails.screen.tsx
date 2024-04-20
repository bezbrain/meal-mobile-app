import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import {
  Details,
  Line,
  MealTitle,
  MoreMealDetails,
} from "../components/screen-components/categoryComponents";
import { dynamicGrid } from "../utils/dynamicGrid";

const MealDetailsScreen = () => {
  const route = useRoute<RouteProp<any>>();
  const navigation = useNavigation();
  const detailsIdParam = route.params?.mealId;

  const [isMeal, setIsMeal] = useState<any>({});

  const { width, height } = useWindowDimensions();

  //   DYNAMICALLY ADD FLEX ROW TO THE SCREEN CONTINER
  const flexContainer: any = dynamicGrid(
    "column",
    "row",
    "column",
    height,
    width
  );
  //   DYNAMICALLY ADD WITH TO THE LHS CONTAINER
  const mealDetailsImageWidth: any = dynamicGrid(
    "100%",
    "48%",
    "100%",
    height,
    width
  );
  //   DYNAMICALLY ADD WITH TO THE LHS CONTAINER
  const mealDetailsPadding: any = dynamicGrid(48, 24, 48, height, width);

  const containerStyle = {
    flexDirection: flexContainer,
    paddingBottom: mealDetailsPadding,
  };

  const handleHeaderButton = () => {
    console.log("Button is pressed");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title="Tap me!" onPress={handleHeaderButton} />;
      },
    });
  }, [navigation, handleHeaderButton]);

  useEffect(() => {
    // Get single meal by id
    const findMeal = MEALS.find((each) => each.id === detailsIdParam);
    setIsMeal(findMeal);
  }, []);

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={{ width: mealDetailsImageWidth }}>
        <Image source={{ uri: isMeal?.imageUrl }} style={styles.image} />
        <MealTitle title={isMeal?.title} />
        <Details
          duration={isMeal?.duration}
          complexity={isMeal?.complexity}
          affordability={isMeal?.affordability}
        />

        <Line />
      </View>

      <ScrollView>
        <MealTitle title="Ingredients" />
        <MoreMealDetails isMeal={isMeal?.ingredients} />

        <Line />

        <MealTitle title="Steps" />
        <MoreMealDetails isMeal={isMeal?.steps} />
      </ScrollView>
    </View>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: "100%",
    marginVertical: 16,
    marginHorizontal: 8,
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
    // paddingBottom: 48,
  },
  image: {
    // width: "100%",
    height: 200,
  },
});
