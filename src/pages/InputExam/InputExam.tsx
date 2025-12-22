import { useState } from "react";

export const InputExam = () => {
  const [inputValue, setInputValue] = useState("Gua Gua");
  console.log("Here>", inputValue)
  return (
    <div>
      <div>Hi it's input exam</div>
      <input value={inputValue} onChange={(event)=>{
        console.log('currentValue is >', event.target.value)
        setInputValue(event.target.value)
      }} />
      <div>
        <span>output: {inputValue}</span>
      </div>
    </div>
  );
};
