export const dynamicGrid = (
  initialGridValue: number,
  shortHeightValue: number,
  smallWidthValue: number,
  height: number,
  width: number
) => {
  let containerGrid = initialGridValue;
  if (height < 400) {
    containerGrid = shortHeightValue;
  }
  if (width < 360) {
    containerGrid = smallWidthValue;
  }

  return containerGrid;
};
