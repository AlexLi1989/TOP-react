import { useState } from "react";
import { initialLetters } from "../data/data.js";
import Letter from "./Letter.jsx";

export default function MailClient() {
  const [letters, setLetters] = useState(initialLetters);
  const [highlightedLetterID, setHighlightedLetterID] = useState(null);

  function handleHover(letter) {
    setHighlightedLetterID(letter?.id ?? null);
  }

  function handleStar(starred) {
    setLetters(
      letters.map((letter) => {
        if (letter.id === starred.id) {
          return {
            ...letter,
            isStarred: !letter.isStarred,
          };
        } else {
          return letter;
        }
      }),
    );
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isHighlighted={letter.id === highlightedLetterID}
            onHover={handleHover}
            onToggleStar={handleStar}
          />
        ))}
      </ul>
    </>
  );
}
