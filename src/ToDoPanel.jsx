import ToDo from "./ToDo";
export default function ToDoPanel(props) {
  let { toDoList } = props;
  let { deleteList } = props;

  function handleClick(index) {
    props.onHandleClick(index);
    
    console.log(index );
  }

  return (
    <>
      <div className="w-50 mx-auto">
        {toDoList.map((e, index) => (
          <ToDo
            toDo={e.name}
            key={index}
            index={index}
            onHandleClick={handleClick}
          />
        ))}
      </div>
    </>
  );
}
