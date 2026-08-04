import { useState } from "react";
import { letters } from "../data/data.js";
import Letter from "./Letter.jsx";

export default function MailClient() {
  const [selectedId, setSelectedId] = useState([]);

  const selectedCount = selectedId.length;

  function handleToggle(toggledId) {
    setSelectedId((prevSelectedId) =>
      prevSelectedId.includes(toggledId)
        ? prevSelectedId.filter((id) => id !== toggledId)
        : [...prevSelectedId, toggledId],
    );
  }
  // alternate and better way is to use Set instead of array,as set naturally removes duplicates
  // const [selectedID, setSelectedId] = useState(new Set());
  // const selectedCount = selectedId.size;
  // function handleToggle(toggledId) {
  //   setSelectedId((prevSelectedId) => {
  //     const nextIds = new Set(prevSelectedIds);
  //     if (nextIds.has(toggledId)) {
  //       nextIds.delete(toggledId);
  //     } else {
  //       nextIds.add(toggledId);
  //     }
  //     return nextIds;
  //   });
  // }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={selectedId.includes(letter.id)}
            //is selected={selectedID.has(letter.id)}
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>You selected {selectedCount} letters</b>
        </p>
      </ul>
    </>
  );
}
