import { useState } from "react";

export const DodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<string[]>([]);
  const addTodo = () => {
    setTodos([...todos, inputValue]);
    setInputValue("");
  };
  const deletTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <div>It's dodo list</div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="button" onClick={() => addTodo()}>
        新增
      </button>

      <div>
        <h4>check list here:</h4>
        <ul>
          {todos.map((todo, index) => (
            <ul key={index}>
              {todo}
              <button type="button" onClick={() => deletTodo(index)}>
                完成
              </button>
            </ul>
          ))}
        </ul>
      </div>
    </div>
  );
};
