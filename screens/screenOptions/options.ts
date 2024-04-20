// General Options for all screens
export const generalOptions = {
  headerStyle: { backgroundColor: "#351401" },
  headerTintColor: "white",
  contentStyle: { backgroundColor: "#3f2f25" },
};

interface DataProp {
  id: string;
  title: string;
  color: string;
}

// Dynamic display of meaal items titile
export const itemsTitles = (data: any, paramId: string) => {
  // Find title from the data
  const newFind = data.find((each: { id: string }) => each.id === paramId);
  return newFind;
};
