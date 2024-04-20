// General Options for all screens
export const generalOptions = {
  headerStyle: { backgroundColor: "#351401" },
  headerTintColor: "white",
  contentStyle: { backgroundColor: "#3f2f25" },
};

interface CategoryProp {
  id: string;
  title: string;
  color: string;
}

// Dynamic display of meaal items titile
export const mealItemsTitles = (route: any, CATEGORIES: CategoryProp[]) => {
  const catParamId = route.params?.categoryId;
  // Find title from the category data
  const newCategory = CATEGORIES.find((each) => each.id === catParamId);
  return newCategory;
};
