import { useFonts } from "expo-font";

export const appFonts = () => {
  const [fontsLoaded] = useFonts({
    "roboto-bold": require("../assets/fonts/Roboto-Bold.otf"),
    "roboto-italic": require("../assets/fonts/Roboto-Italic.otf"),
    "roboto-light": require("../assets/fonts/Roboto-Light.otf"),
    "roboto-medium": require("../assets/fonts/Roboto-Medium.otf"),
    "roboto-medium-italic": require("../assets/fonts/Roboto-MediumItalic.otf"),
    "roboto-regular": require("../assets/fonts/Roboto-Regular.otf"),
    "roboto-thin": require("../assets/fonts/Roboto-Thin.otf"),
  });
  return fontsLoaded;
};
