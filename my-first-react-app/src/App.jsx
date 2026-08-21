import { useState, useRef } from "react";

export default function CatFriends() {
  const [index, setIndex] = useState(0);
  const catListRef = useRef(null);
  const clickHandler = () => {
    const nextIndex = index < catList.length - 1 ? index + 1 : 0;
    setIndex(nextIndex);
    const listNodes = catListRef.current.querySelectorAll("li");
    const targetNode = listNodes[nextIndex];
    targetNode.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };
  return (
    <>
      <nav>
        <button onClick={clickHandler}>Next</button>
      </nav>
      <div>
        <ul ref={catListRef}>
          {catList.map((cat, i) => (
            <li key={cat.id}>
              <img
                className={index === i ? "active" : ""}
                src={cat.imageUrl}
                alt={"Cat #" + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const catCount = 10;
const catList = new Array(catCount);
for (let i = 0; i < catCount; i++) {
  const bucket = Math.floor(Math.random() * catCount) % 2;
  let imageUrl = "";
  switch (bucket) {
    case 0: {
      imageUrl = "https://placecats.com/neo/250/200";
      break;
    }
    case 1: {
      imageUrl = "https://placecats.com/millie/250/200";
      break;
    }
    case 2:
    default: {
      imageUrl = "https://placecats.com/bella/250/200";
      break;
    }
  }
  catList[i] = {
    id: i,
    imageUrl,
  };
}
