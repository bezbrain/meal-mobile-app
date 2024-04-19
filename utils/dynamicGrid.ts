export const dynamicGrid = (
  initialGridValue: number | string,
  shortHeightValue: number | string,
  smallWidthValue: number | string,
  height: number,
  width: number
) => {
  let containerGrid: number | string = initialGridValue;
  if (height < 400) {
    containerGrid = shortHeightValue;
  }
  if (width < 360) {
    containerGrid = smallWidthValue;
  }

  return containerGrid;
};
