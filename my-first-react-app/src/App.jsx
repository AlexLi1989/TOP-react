import { useRef } from "react";
export default function Page() {
  const inputRef = useRef(null);
  const clickHandler = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <nav>
        <button onClick={clickHandler}>Search</button>
      </nav>
      <input placeholder="Looking for something?" ref={inputRef} />
    </>
  );
}
