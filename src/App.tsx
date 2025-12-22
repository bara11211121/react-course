import { Card } from "./components/Card";
import "./App.css";
import { Count } from "./components/Count";
import { Fruit } from "./components/Fruit";
import { Header } from "./components/Header";
import Link from "./components/Link";
import { ProfileCard } from "./components/ProfileCard";


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
const profiles = [
  { id: 1, name: "呱呱蛙", intro: "喜歡大聲唱歌" },
  { id: 2, name: "美樂蒂", intro: "喜歡睡覺" },
  { id: 3, name: "桃樂比", intro: "喜歡工作" },
];

export const App = () => {
  return (
    <div>
      <Header />
      <div>
        {profiles.map((user) => (
          <div key={`profiles-${user.id}`}>
            <ProfileCard name={`我的名字是:${user.name}`} intro={user.intro}>
              <img src="./frog.jpeg" alt="呱呱" />
            </ProfileCard>
          </div>
        ))}
      </div>

      

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

// export default App;
