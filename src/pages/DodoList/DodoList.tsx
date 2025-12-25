import { useState } from "react";

export const DodoList = () =>{
    const [inputValue, setInputValue] = useState("");  
    const [todos, setTodos] =useState([]);
    const addTodo = () =>{
        setTodos([...todos, inputValue]);
        setInputValue("");
    }
    const deletTodo = (index) =>{
        const newTodos = [...todos];
        newTodos.splice(index,1);
        setTodos(newTodos);
        

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
                <ul key={index}>{todo}
                    <button onClick={deletTodo}>
                        完成
                    </button>
                </ul>
                )}
            </ul>
        </div>
      </div>
    );
};