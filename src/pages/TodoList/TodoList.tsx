import { useState } from "react";

// biome-ignore lint/style/useConsistentTypeDefinitions: <explanation>
interface Todo {
  index: number;
  text: string;
  isEditing: boolean;
}
export const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  console.log(todos);
  const addTodo = () => {
    const newTodo = {
      index: Date.now(),
      text: inputValue,
      isEditing: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };
  const deleteTodo = (index: number) => {
    setTodos(todos.filter((todo) => todo.index !== index));
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
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-md transform overflow-hidden rounded-xl bg-white shadow-2xl transition-all hover:shadow-3xl">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6">
          <div className="text-center font-extrabold text-3xl text-white tracking-tight drop-shadow-md">
            It's todo list
          </div>
        </div>

        <div className="p-8">
          <div className="mb-8 flex gap-3">
            <input
              className="flex-1 rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 font-medium text-gray-700 placeholder-gray-400 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Add a new task..."
              type="text"
              value={inputValue}
            />
            <button
              className="rounded-lg bg-indigo-600 px-6 py-3 font-bold text-white shadow-indigo-500/30 shadow-lg transition-all duration-200 hover:bg-indigo-700 hover:shadow-indigo-500/50 active:scale-95"
              onClick={() => addTodo()}
              type="button"
            >
              新增
            </button>
          </div>

          <div className="space-y-4">
            <h4 className="border-gray-100 border-b pb-2 font-bold text-gray-500 text-sm uppercase tracking-widest">
              check list here:
            </h4>
            <ul className="space-y-3">
              {todos.map((todo) => (
                <li
                  className="group flex flex-col justify-between rounded-xl border border-gray-100 bg-white p-4 transition-all duration-300 hover:border-blue-100 hover:shadow-md sm:flex-row sm:items-center"
                  key={todo.index}
                >
                  {todo.isEditing ? (
                    <div className="fade-in zoom-in-95 flex w-full animate-in items-center gap-2 duration-200">
                      <input
                        autoFocus
                        className="flex-1 rounded-lg border border-blue-200 bg-blue-50/50 px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) =>
                          handleEditChange(todo.index, e.target.value)
                        }
                        value={todo.text}
                      />
                      <button
                        className="rounded-lg bg-emerald-500 px-4 py-2 font-semibold text-white shadow-sm transition-colors hover:bg-emerald-600"
                        onClick={() => saveEdit(todo.index)}
                      >
                        儲存
                      </button>
                    </div>
                  ) : (
                    <>
                      <span className="mb-3 break-all font-medium text-gray-700 sm:mb-0">
                        {todo.text}
                      </span>
                      <div className="flex items-center gap-2 opacity-100 transition-opacity duration-200 group-hover:opacity-100 sm:opacity-0">
                        <button
                          className="rounded-md bg-red-50 px-3 py-1.5 font-medium text-red-500 text-sm transition-colors hover:bg-red-100"
                          onClick={() => deleteTodo(todo.index)}
                        >
                          X
                        </button>
                        <button
                          className="rounded-md bg-blue-50 px-3 py-1.5 font-medium text-blue-600 text-sm transition-colors hover:bg-blue-100"
                          onClick={() => startEdit(todo.index)}
                        >
                          編輯
                        </button>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
