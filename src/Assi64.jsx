import { useState } from "react";

import "./App.css";

export default function Assi64() {
  let players = ["virat", "rohit", "dhavan", "mahendra", "gavsakar"];

  let [index, setIndex] = useState(0);

  function handleClick(event) {
    if (event.target.id == `+`) {
      setIndex(index + 1);
      console.log((index += 1));
    }
    if (event.target.id == `-`) {
      setIndex(index - 1);
      console.log((index -= 1));
    }
  }
  return (
    <>
      <div className=" text-center mt-2 mx-auto p-2   ">
        <button
          className="btn btn-primary  m-2"
          id="-"
          onClick={handleClick}
          disabled={index == 0}
        >
          Previous Image
        </button>

        <button
          className="btn btn-primary "
          id="+"
          onClick={handleClick}
          disabled={index == 4}
        >
          Next Image
        </button>
      </div>

      <div className="text-center">
        <img src={`/playerImage/${players[index]}.jpg`} alt="" />
      </div>
    </>
  );
}
