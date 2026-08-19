import { useState } from "react"; // 💡 1. 記得匯入 useState
import { places } from "./data/data.js";
import { getImageUrl } from "./components/utils";
import { ImageSizeProvider } from "./components/ImageSizeContext";
import { useImageSize } from "./components/useImageSize";

export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => setIsLarge(e.target.checked)}
        />
        Use large images
      </label>
      <hr />
      <ImageSizeProvider value={imageSize}>
        <List />
      </ImageSizeProvider>
    </>
  );
}

function List() {
  const listItems = places.map((place) => (
    <li key={place.id}>
      <Place place={place} />
    </li>
  ));
  return <ul>{listItems}</ul>;
}

function Place({ place }) {
  return (
    <>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {": " + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place }) {
  const imageSize = useImageSize();
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
