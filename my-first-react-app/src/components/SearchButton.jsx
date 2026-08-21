import useInputContext from "./useInputContext";
export default function SearchButton() {
  const { clickHandler } = useInputContext();
  return <button onClick={clickHandler}>Search</button>;
}
