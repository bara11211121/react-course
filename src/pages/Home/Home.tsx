import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./Home.module.css";

export const Home = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  return (
    <div className={styles.homeBg}>
      <div className={styles.homeCard}>
        <div className={styles.homeTitle}>🏠 Home Page</div>
        <div className={styles.homeHi}>Hi，歡迎來到 React Course！</div>
        <div className={styles.homeBtnGroup}>
          <button
            className={styles.homeBtn}
            onClick={() => navigate("/dodo-list")}
            type="button"
          >
            Dodo List
          </button>
          <button
            className={styles.homeBtn}
            onClick={() => navigate("/gua")}
            type="button"
          >
            Gua Profile
          </button>
          <button
            className={styles.homeBtn}
            onClick={() => navigate("/input-exam")}
            type="button"
          >
            Input Exam
          </button>
          <button
            className={styles.homeBtn}
            onClick={() => navigate("/app")}
            type="button"
          >
            App
          </button>
        </div>
      </div>
    </div>
  );
};
