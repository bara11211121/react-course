import { Card } from "./components/Card";
import "./App.css";
import { Count } from "./components/Count";
import { Fruit } from "./components/Fruit";
import { Header } from "./components/Header";
import Link from "./components/Link";

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

function App() {
  return (
    <div>
      <Header />
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
