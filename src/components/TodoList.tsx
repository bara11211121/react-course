interface TodoProps{
    todo:string;
};
export const TodoList = (props:TodoProps)=>{
    const {todo} = props;
    return(
        <div>
            <p>To do list:</p>
            <p>{todo}</p>
        </div>
    );
};