import { AiFillBug } from "react-icons/ai";
import { Button } from "./components/Button";

const navList = ["Travel", "Explore", "Flights", "Hotels", "Vacation Rentals"];
const Header = () => (
  <div>
    {navList.map((item) => (
      <Button key={item}> 
        <AiFillBug />
        {item}
      </Button>
    ))}
  </div>
);

export { Header };
