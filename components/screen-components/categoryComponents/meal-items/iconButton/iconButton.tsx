import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface IconButtonProp {
  icon: any;
  color: string;
  handlePress: () => void;
}

const IconButton = ({ icon, color, handlePress }: IconButtonProp) => {
  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => (
        pressed ? styles.pressed : null, styles.iconContainer
      )}
    >
      <AntDesign name={icon} size={24} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  iconContainer: {
    paddingRight: 8,
  },
  pressed: {
    opacity: 0.5,
  },
});
