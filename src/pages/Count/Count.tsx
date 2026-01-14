import { useState } from "react";

export const Count = () => {
  const [count, setCount] = useState<number>(0);
  const [show, setShow] = useState<boolean>(false);

  return (
    <div>
      <h3 style={{ color: count > 10 ? "red" : "blue" }}>Count: {count} </h3>
      <div>
        {show && <span>email: jo74705@gmail.com</span>}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -1
        </button>
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? "hidden" : "show"}
        </button>
      </div>
    </div>
  );
};
