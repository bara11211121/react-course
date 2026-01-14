import { useState } from "react";
import { useNavigate } from "react-router";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function BasicTooltip() {
  return (
    <Tooltip title="Delete">
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
}
export const Home = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </div>
      <div>I am home page</div>
      <div>Hi</div>
      <div>
        <button
          onClick={() => {
            navigate("/dodo-list");
          }}
        >
          dodo list
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            navigate("/gua");
          }}
        >
          gua profile
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            navigate("/input-exam");
          }}
        >
          input exam
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            navigate("/app");
          }}
        >
          app
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            navigate("/count");
          }}
        >
          count
        </button>
      </div>
    </div>
  );
};
