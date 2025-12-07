interface FruitProps{
    weight:number;
    name:string;
    price:number;
}

export const Fruit = (props:FruitProps) =>{
    const { weight, name, price } = props; 
    return (
        <div>
            <div>Fruit's weight is {weight}</div>
            <div>Fruit's name is {name}</div>
            <div>Fruit's pirce is {price}</div>
        </div>
    );

    
};
