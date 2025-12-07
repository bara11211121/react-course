interface CardProps {
  name: string;
  age: number;
}
export const Card = (props: CardProps) => {
  const { name, age } = props;
  return (
    <div>
      <div>My name is {name}</div>
      <div>My age is {age}</div>
    </div>
  );
};
