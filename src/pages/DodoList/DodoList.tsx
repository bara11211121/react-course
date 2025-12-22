import { useState } from "react";

export const DodoList = () =>{
    const [inputValue, setInputValue] = useState("");  
    const [todos, setTodos] =useState([]);
    const addTodo = () =>{
        setTodos([...todos, inputValue]);
        setInputValue("");
    }
    
    return(
      <div>  
        <div>It's dodo list</div>
        <input type = "text" value={inputValue} onChange={(e)=>
            setInputValue(e.target.value)
        } />
        <button onClick={addTodo}>新增</button>
        <div>
            
        </div>
        <div>
            <h4>check list here:</h4>
            <ul>
                {todos.map((todo,index) =>
                <ul key={index}>{todo}</ul>
                )}
            </ul>
        </div>
      </div>
    );
};