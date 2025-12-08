import { Card } from "./components/Card";
import "./App.css";
import { Count } from "./components/Count";
import { Fruit } from "./components/Fruit";

const classmates = [
  { name: "Sally", age: 15 },
  { name: "Jessica", age: 65 },
  { name: "Henry", age: 80 },
];
const fruit = {
  weight: 125,
  name: 'apple',
  price: 48,
}
function App() {
 
  return (
    <div>
      <h1 className="title">Hello world! Cocododo</h1>
      <h1 className="title">Here is Henry</h1>
      {classmates.map((item) => (
        <div>
          <span>Name: {item.name} </span>
          <span>Age: {item.age}</span>
        </div>
      ))}
      <Card age={60} name={"Bara"} />
      <Count />
      <Fruit weight={125} name={'apple'} price={48}/> 
    </div>
  );
}

export default App;
