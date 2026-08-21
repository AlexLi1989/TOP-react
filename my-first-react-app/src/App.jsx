import SearchButton from "./components/SearchButton";
import SearchInput from "./components/SearchInput";
import { InputProvider } from "./components/useInputContext";

export default function Page() {
  return (
    <>
      <InputProvider>
        <nav>
          <SearchButton />
        </nav>
        <SearchInput />
      </InputProvider>
    </>
  );
}
