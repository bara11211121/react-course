import { useState } from "react";

export const DodoList = () =>{
    const [inputValue, setInputValue] useState(["gua"]);
  
    return(
      <div>  
        <div>It's dodo list</div>
        <input value={inputValue} onChange={(e)=>{
            setInputValue(e.target.value)
        }} />
        <div>
            <span>check list here:{inputValue}</span>
        </div>
      </div>
    );
};