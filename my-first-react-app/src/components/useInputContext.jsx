import { useRef, useContext, createContext } from "react";

const InputContext = createContext(null);

export function InputProvider({ children }) {
  const inputRef = useRef(null);
  const clickHandler = () => {
    inputRef.current.focus();
  };
  return (
    <InputContext value={{ inputRef, clickHandler }}>{children}</InputContext>
  );
}
/* eslint-disable react-refresh/only-export-components */
export default function useInputContext() {
  const context = useContext(InputContext);
  if (!context) {
    throw new Error(
      "InputContext must be used within an InputContext.Provider",
    );
  }
  return context;
}
