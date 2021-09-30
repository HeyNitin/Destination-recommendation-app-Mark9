import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [list, setList] = useState("");

  function btnClickHandlerF(event) {
    setList(
      <ol>
        <li style={{ marginBottom: "1rem" }}>
          India
          <div> Rating: 5/5</div>
        </li>

        <li style={{ marginBottom: "1rem" }}>
          Sri Lanka
          <div> Rating: 3.5/5</div>
        </li>
        <li>
          Nepal
          <div> Rating: 4.5/5</div>
        </li>
      </ol>
    );
  }

  function btnClickHandlerS(event) {
    setList(
      <ol>
        <li style={{ marginBottom: "1rem" }}>
          Spain
          <div> Rating: 4/5</div>
        </li>
        <li style={{ marginBottom: "1rem" }}>
          UK
          <div> Rating: 3.5/5</div>
        </li>
        <li>
          France
          <div> Rating: 4/5</div>
        </li>
      </ol>
    );
  }

  function btnClickHandlerT(event) {
    setList(
      <ol>
        <li style={{ marginBottom: "1rem" }}>
          Unites States of America
          <div> Rating: 4/5</div>
        </li>

        <li style={{ marginBottom: "1rem" }}>
          Canada
          <div> Rating: 3/5</div>
        </li>
        <li>
          Cuba
          <div> Rating: 3/5</div>
        </li>
      </ol>
    );
  }
  return (
    <div className="App">
      <h1>Destination Recommendation APP</h1>

      <h3>Select continent </h3>

      <button onClick={btnClickHandlerF}>Asia</button>
      <button onClick={btnClickHandlerS}>Europe</button>
      <button onClick={btnClickHandlerT}>North-America</button>

      <div>
        <hr />
      </div>

      <span>{list}</span>
    </div>
  );
}
