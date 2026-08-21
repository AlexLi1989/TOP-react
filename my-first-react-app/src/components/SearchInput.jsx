import useInputContext from "./useInputContext";

export default function SearchInput() {
  const { inputRef } = useInputContext();

  return <input placeholder="Looking for something?" ref={inputRef} />;
}
