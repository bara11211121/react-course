import { useState } from "react";
import { useNavigate } from "react-router";

export const Home = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <div>I am home page</div>
      <div>Hi</div>
      <div>
        <button
          onClick={() => {
            navigate("/dodo-list");
          }}
          type="button"
        >
          dodo list
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            navigate("/gua");
          }}
          type="button"
        >
          gua profile
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            navigate("/input-exam");
          }}
          type="button"
        >
          input exam
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            navigate("/app");
          }}
          type="button"
        >
          app
        </button>
      </div>
    </div>
  );
};
