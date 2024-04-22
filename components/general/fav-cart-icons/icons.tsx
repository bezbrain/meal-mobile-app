import React from "react";
import { StyleSheet, View } from "react-native";
import { IconButton } from "../../screen-components/categoryComponents";

interface IconsProps {
  handleDeleteAll: () => void;
  handleGoHome: () => void;
}

const Icons = ({ handleDeleteAll, handleGoHome }: IconsProps) => {
  return (
    <View style={styles.iconsContainer}>
      <IconButton icon="delete" color="white" handlePress={handleDeleteAll} />
      <IconButton icon="home" color="white" handlePress={handleGoHome} />
    </View>
  );
};

export default Icons;

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
});
