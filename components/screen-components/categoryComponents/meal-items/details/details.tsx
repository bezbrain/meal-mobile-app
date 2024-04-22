import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useScreenContext } from "../../../../../contexts/screen.context";

interface DetailsProps {
  duration: number | undefined;
  complexity: string | undefined;
  affordability: string | undefined;
  title?: string;
}

const Details = ({
  duration,
  complexity,
  affordability,
  title,
}: DetailsProps) => {
  const { isFavCart } = useScreenContext();
  // const navigation = useNavigation();
  // const route: any = useRoute();
  // // console.log(route.name);
  // const currentRoute = route.name;

  // useEffect(() => {
  //   setIsFavCart(false);
  // }, []);

  // navigation.

  return (
    <View style={styles.mealdetailsContainer}>
      <Text style={styles.detailItems}>{duration}mins</Text>
      <Text style={styles.detailItems}>{complexity?.toUpperCase()}</Text>
      <Text style={styles.detailItems}>{affordability?.toUpperCase()}</Text>
      {isFavCart && <Button title={`${title}`} color="#351401" />}
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  mealdetailsContainer: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailItems: {
    fontSize: 12,
    fontFamily: "roboto-regular",
  },
});
