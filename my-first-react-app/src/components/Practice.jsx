import { useState, useEffect } from "react";
import { fetchData } from "./api.js";

export default function Page() {
  const [planetList, setPlanetList] = useState([]);
  const [planetId, setPlanetId] = useState("");

  const [placeList, setPlaceList] = useState([]);
  const [placeId, setPlaceId] = useState("");

  useEffect(() => {
    let ignore = false; //ignore variable utilizes closures to prevent memory leaks upon early unmounting, manage Strict Mode double-rendering, and crucially, prevent race conditions when the effect triggers multiple times in rapid succession
    fetchData("/planets").then((result) => {
      if (!ignore) {
        console.log("Fetched a list of planets.");
        setPlanetList(result);
        if (result?.length > 0) //in case planets array is empty
        {
          setPlanetId(result[0].id);
        }
      }
    });
    return () => {
      ignore = true;
    };
  }, []);
  useEffect(() => {
    if (!planetId) return;
    let ignore = false;
    fetchData("/planets/" + planetId + "/places").then((result) => {
      if (!ignore) {
        console.log("Fetched a list of places.");
        setPlaceList(result);
        if (result?.length > 0) //in case places array is empty
        {
          setPlaceId(result[0].id);
        }
      }
    });
    return () => {
      ignore = true;
    };
  }, [planetId]);
  return (
    <>
      <label>
        Pick a planet:{" "}
        <select
          value={planetId}
          onChange={(e) => {
            setPlanetId(e.target.value);
            setPlaceList([]);
            setPlaceId("");
          }}
        >
          {planetList.map((planet) => (
            <option key={planet.id} value={planet.id}>
              {planet.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Pick a place:{" "}
        <select
          value={placeId}
          onChange={(e) => {
            setPlaceId(e.target.value);
          }}
        >
          {placeList.map((place) => (
            <option key={place.id} value={place.id}>
              {place.name}
            </option>
          ))}
        </select>
      </label>
      <hr />
      <p>
        You are going to: {placeId || "???"} on {planetId || "???"}{" "}
      </p>
    </>
  );
}
