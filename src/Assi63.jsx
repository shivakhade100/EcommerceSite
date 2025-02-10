import { useState } from "react";
import "./App.css";

export default function Assi63() {
  let [src, setSrc] = useState("");

  function handleClick(event) {
    setSrc(event.target.id);
  }
  return (
    <>
      <div className=" text-center mt-2 mx-auto p-2   ">
        <button
          className="btn btn-primary  m-2"
          id="india"
          onClick={handleClick}
        >
          INDIA
        </button>

        <button className="btn btn-primary " id="usa" onClick={handleClick}>
          USA
        </button>
      </div>

      <div className="text-center">
        <img src={`${src}.jpg`} alt="" />
      </div>
    </>
  );
}
