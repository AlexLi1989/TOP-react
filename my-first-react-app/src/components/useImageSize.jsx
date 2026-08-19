import { useContext } from "react";
import { ImageSizeContext } from "./ImageSizeContext";
//create custom hook

export const useImageSize = () => {
  const imageSize = useContext(ImageSizeContext);

  if (imageSize === undefined) {
    throw new Error("ImageSizeContext must be used within a Provider");
  }

  return imageSize;
};
