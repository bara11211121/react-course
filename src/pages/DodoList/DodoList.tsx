import { useState } from "react";
import styles from "./DodoList.module.css";

export const DodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<string[]>([]);
  const addTodo = () => {
    setTodos([...todos, inputValue]);
    setInputValue("");
  };
  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className={styles.dodoBg}>
      <div className={styles.dodoCard}>
        <h2 className={styles.dodoTitle}>🦤 Dodo List</h2>
        <div className={styles.inputRow}>
          <input
            className={styles.input}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="請輸入待辦事項..."
            type="text"
            value={inputValue}
          />
          <button className={styles.addBtn} onClick={addTodo} type="button">
            新增
          </button>
        </div>
        <div>
          <h4 className={styles.listTitle}>Check list here:</h4>
          <ul className={styles.todoList}>
            {todos.length === 0 && (
              <li className={styles.emptyTip}>目前沒有待辦事項</li>
            )}
            {todos.map((todo, index) => (
              <li className={styles.todoItem} key={index}>
                <span className={styles.todoText}>{todo}</span>
                <button
                  className={styles.doneBtn}
                  onClick={() => deleteTodo(index)}
                  type="button"
                >
                  完成
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
