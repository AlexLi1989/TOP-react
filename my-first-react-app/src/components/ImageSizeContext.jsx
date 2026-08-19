import { createContext } from "react";

const ImageSizeContext = createContext();

export function ImageSizeProvider({ children, value }) {
  return <ImageSizeContext value={value}>{children}</ImageSizeContext>;
}
export { ImageSizeContext };
