import { useState } from "react";
interface todosInterface {
  index: number;
  text: string;
  isEditing: boolean;
}
export const DodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<todosInterface[]>([]);

  const addTodo = () => {
    setTodos([...todos, inputValue]);
    setInputValue("");
  };
  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const startEdit = (index: number) => {
    setTodos(
      todos.map((todo) =>
        todo.index === index ? { ...todo, isEditing: true } : todo
      )
    );
  };
  const saveEdit = (index: number) => {
    setTodos(
      todos.map((todo) =>
        todo.index === index ? { ...todo, isEditing: false } : todo
      )
    );
  };
  const handleEditChange = (index: number, newText: string) => {
    setTodos(
      todos.map((todo) =>
        todo.index === index ? { ...todo, text: newText } : todo
      )
    );
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
          {todos.map((todo) => (
            <li key={todo.index}>
              {todo.isEditing ? (
                <>
                  <input
                    value={todo.text}
                    onChange={(e) =>
                      handleEditChange(todo.index, e.target.value)
                    }
                  />
                  <button onClick={() => saveEdit(todo.index)}>儲存</button>
                </>
              ) : (
                <>
                  <span>{todo.text}</span>
                  <button onClick={() => deleteTodo(todo.index)}>X</button>
                  <button onClick={() => startEdit(todo.index)}>編輯</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
