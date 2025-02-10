import { useState } from "react";
import ToDoPanel from "./ToDoPanel";

export default function Assi70() {
  let toDos = [
    { name: "Wake-up at 6 am" },
    { name: "Jogging at 6.30 am" },
    { name: "To library at 8 am" },
    { name: "To College at 11 am" },
    { name: "To Gym at 6 pm" },
    { name: "Dinner at 8.30 pm" },
  ];
  function handleClick(index) {
    console.log(index );
    // let deletedList = { ...toDoList };
    // let deleted = deletedList.splice(index, 1);
    // console.log(deleted);
    let deletedList = toDoList.filter((e,i) => index != i);
    setToDoList(deletedList);
  }
  let [toDoList, setToDoList] = useState(toDos);
  // function handleClick() {
  //   setToDoList([...toDoList]);
  //   setToDoList.splice(0, 1);
  // }
  return (
    <>
      <div className="text-center text-primary">Total ..... todos</div>
      <ToDoPanel toDoList={toDoList} onHandleClick={handleClick} />
    </>
  );
}
