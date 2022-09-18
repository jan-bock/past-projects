import { useState } from "react";
import "./Buttons.css";

function Buttons() {
  const [count, setCount] = useState(0); //Initial = 0

  //On button click, increment the text by 1
  return (
    <div className="wrapper">
      <p className="count-text">{count}</p>
      <div className="buttons">
        <button className="button" onClick={() => setCount(count + 1)}>Increment</button>
        <button className="button" onClick={() => setCount(count === 0 ? 0 : count - 1)}>Decrement</button>
        <button className="button" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Buttons;
