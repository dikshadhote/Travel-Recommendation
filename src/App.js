import "./styles.css";
import { useState } from "react";

const placesDB = {
  Mumbai: [
    { name: "Gate Way of India", rating: "3.5/5" },
    { name: "Marine drive", rating: "4/5" }
  ],
  Delhi: [
    { name: "India Gate", rating: "3.5/5" },
    { name: "Lotus temple", rating: "3.8/5" }
  ],
  Agra: [
    { name: "Taj Mahal", rating: "4.8/5" },
    { name: "Agra Fort", rating: "4.5/5" }
  ]
};

const placeDBArrKeys = Object.keys(placesDB);

export default function App() {
  const [selectedPlace, setSelectedPlace] = useState("Mumbai");
  function visitPlaceHandler(place) {
    setSelectedPlace(place);
  }
  return (
    <div className="App">
      <h1>
        Travel Recommendation <span>🏝️</span>
      </h1>
      <p>Checkout my favorite places to visit in India.</p>
      <p>Select a place to get started</p>
      <div>
        {placeDBArrKeys.map((place) => {
          return (
            <button
              onClick={() => visitPlaceHandler(place)}
              key={place}
              style={{
                padding: "0.2rem",
                cursor: "pointer",
                margin: "0.5rem",
                width: "80px",
                backgroundColor: "GreenYellow",
                borderRadius: "5px"
              }}
            >
              {place}
            </button>
          );
        })}
      </div>
      <div>
        {placesDB[selectedPlace].map((place) => {
          return (
            <div
              key={place.name}
              style={{
                fontsize: "larger",
                marginTop: "2rem",
                marginLeft: "20rem",
                marginRight: "20rem",
                border: "2px solid grey",
                padding: "5px",
                borderRadius: "5px"
              }}
            >
              <div style={{ padding: "5px", fontWeight: "bold" }}>
                {place.name}
              </div>
              <div>{place.rating}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
