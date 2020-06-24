import React from "react";
import Button from "./Components/Button/Button.js";

import DecButton from "./Components/DecButton/DecButton.js";
import SaveButton from "./Components/SaveButton/SaveButton.js";
import ResButton from "./Components/ResButton/ResButton.js";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [resultList, setResultList] = useState([]);

  const incrementCount = increment => {
    setCount(count + increment);
    console.log(count + increment);
  };

  const decrementCount = decrement => {
    setCount(count + decrement);
    console.log(count + decrement);
  };

  const reset = () => {
    setCount(0);
  };

  const saveCurrentCount = () => {
    setResultList(list => {
      return [...list, count];
    });
  };

  return (
    <div className="App">
      <Button increment={1} onClickFunction={incrementCount} />
      <Button increment={10} onClickFunction={incrementCount} />
      <Button increment={100} onClickFunction={incrementCount} />
      <Button increment={1000} onClickFunction={incrementCount} />

      <DecButton decrement={-1} onClickFunction={decrementCount} />
      <DecButton decrement={-10} onClickFunction={decrementCount} />
      <DecButton decrement={-100} onClickFunction={decrementCount} />
      <DecButton decrement={-1000} onClickFunction={decrementCount} />

      <br />
      <br />
      <SaveButton onClickFunction={() => saveCurrentCount()} />
      <ResButton onClickFunction={() => reset()} />
      <br />
      <br />
      <span>{count}</span>
      <br />
      <br />
      <h2>RESULTS:</h2>
      <span >
        <div class="container">

        {resultList.join(" ")}
        </div>
      </span>
      <br />
    </div>
  );
}

export default App;
