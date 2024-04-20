import React from "react";
import { Alert, Pressable, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface IconButtonProp {
  icon: any;
  color: string;
}

const IconButton = ({ icon, color }: IconButtonProp) => {
  const handleHeaderButton = () => {
    // console.log("Button is pressed");
    Alert.alert("To Favourite", "Item successfully added to favourite", [
      { text: "OK", style: "cancel" },
    ]);
  };

  return (
    <Pressable
      onPress={handleHeaderButton}
      style={({ pressed }) => (pressed ? styles.pressed : null)}
    >
      <AntDesign name={icon} size={24} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});
