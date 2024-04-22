import { createContext, useContext, useState } from "react";
import { ChildrenProps } from "./context.types";

const AppContext = createContext<any>(undefined);

export const ScreenProvider = ({ children }: ChildrenProps) => {
  const [categoryColumns, setCategoryColumns] = useState<number>(2);
  const [mealItemsColumns, setMealItemsColumns] = useState<number>(1);

  const [favouriteArr, setFavouriteArr] = useState([]);
  const [cartArr, setCartArr] = useState([]);
  // const [isFavCart, setIsFavCart] = useState(false);

  return (
    <AppContext.Provider
      value={{
        categoryColumns,
        setCategoryColumns,
        mealItemsColumns,
        setMealItemsColumns,
        favouriteArr,
        setFavouriteArr,
        cartArr,
        setCartArr,
        // isFavCart,
        // setIsFavCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useScreenContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useScreenContext should be within the screenProvider");
  }
  return context;
};
