import React from "react";
import { Alert, Pressable, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const IconButton = () => {
  const handleHeaderButton = () => {
    // console.log("Button is pressed");
    Alert.alert("To Favourite", "Item successfully added to favourite", [
      { text: "OK", style: "cancel" },
    ]);
  };

  return (
    <Pressable onPress={handleHeaderButton}>
      <AntDesign name="heart" size={24} color="red" />
    </Pressable>
  );
};

export default IconButton;
