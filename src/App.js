/* eslint-disable no-eval */
import "./App.css";
import InputButton from "./UI/InputButton";
import "./css/style.css";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const clickHandler = (event) => {
    return setResult(result.concat(event.target.value));
  };

  const clearDisplay = () => {
    setResult("");
  };

  const calculation = () => {
    setResult(eval(result).toString());
  };

  return (
    <div className="calc">
      <input
        type="text"
        name="answer"
        id="answer"
        placeholder="0"
        value={result}
      />
      <InputButton value="9" onClick={clickHandler} />
      <InputButton value="8" onClick={clickHandler} />
      <InputButton value="7" onClick={clickHandler} />
      <InputButton value="6" onClick={clickHandler} />
      <InputButton value="5" onClick={clickHandler} />
      <InputButton value="4" onClick={clickHandler} />
      <InputButton value="3" onClick={clickHandler} />
      <InputButton value="2" onClick={clickHandler} />
      <InputButton value="1" onClick={clickHandler} />
      <InputButton value="0" onClick={clickHandler} />
      <InputButton value="." onClick={clickHandler} />
      <InputButton value="+" onClick={clickHandler} />
      <InputButton value="-" onClick={clickHandler} />
      <InputButton value="*" onClick={clickHandler} />
      <InputButton value="/" onClick={clickHandler} />
      <InputButton value="%" onClick={clickHandler} />
      <InputButton value="Clear" onClick={clearDisplay} />
      <InputButton value="=" onClick={calculation} />
    </div>
  );
}

export default App;
