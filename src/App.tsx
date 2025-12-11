import { Card } from "./components/Card";
import "./App.css";
import { useState } from "react";
import { Count } from "./components/Count";
import { Fruit } from "./components/Fruit";
import { Header } from "./components/Header";
import Link from "./components/Link";
import { ProfileCard } from "./components/ProfileCard";
import { TodoList } from "./components/TodoList";

const classmates = [
  { name: "Sally", age: 15 },
  { name: "Jessica", age: 65 },
  { name: "Henry", age: 80 },
];
const fruit = {
  weight: 125,
  name: "apple",
  price: 48,
};
const todoStuff = [{ todo: "read" }, { todo: "shower" }, { todo: "sleep" }];
const profileList = [
  { name: "呱呱蛙", intro: "喜歡大聲唱歌" },
  { name: "美樂蒂", intro: "喜歡睡覺" },
  { name: "桃樂比", intro: "喜歡工作" },
];

const defaultFruit = ["🍎", "🍒", "🍓", "🍉", "🍍"];

// 1. 先有一個空的array state
// 2. 按下按鈕加入一項待辦事項（可以自己決定待辦事項是什麼
// 3. 顯示在畫面上

function App() {
  const [fruitList, setFruitList] = useState<string[]>(defaultFruit);

  return (
    <div>
      <div>
        {fruitList.map((fruitEmoji) => (
          <span key={fruitEmoji} style={{ fontSize: "24px", margin: "4px" }}>
            {fruitEmoji}
          </span>
        ))}
      </div>
      <button
        onClick={() => {
          const newArray = [...fruitList];
          newArray.push("🍇");
          setFruitList(newArray);
        }}
        style={{ backgroundColor: "gray" }}
        type={"button"}
      >
        Add a fruit
      </button>
      <Header />
      <div>
        {profileList.map((user) => (
          <div key={`profile-${user.name}`}>
            <ProfileCard intro={user.intro} name={user.name}>
              <img alt="呱呱" src="./frog.jpeg" />
            </ProfileCard>
          </div>
        ))}
      </div>

      <TodoList todo={"read"} />

      <h1 className="title">Hello world!</h1>

      {classmates.map((item) => (
        <div key={`item-${item.name}`}>
          <span>Name: {item.name} </span>
          <span>Age: {item.age}</span>
        </div>
      ))}
      <Card age={60} name={"Bara"} />
      <Count />
      <Fruit name={"apple"} price={48} weight={125} />
      <Link url="https://onlyface.app">
        <img
          alt="logo"
          height={100}
          src="https://www.onlyface.app/_next/image?url=https%3A%2F%2Fimage.onlyface.app%2FGoogle-Play-Icon.png&w=1080&q=75"
          width={300}
        />
      </Link>
    </div>
  );
}

export default App;
