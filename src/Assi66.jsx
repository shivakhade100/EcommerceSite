import { useState } from "react";

export default function Assi66() {
  let [text, setTxt] = useState("");
  function handleclick(event) {
    setTxt(event.target.value);
  }

  return (
    <>
      <div className="mt-5">
        <input type="text" name="s" size="50" id="+" onKeyUp={handleclick} />
      </div>
      <div className="w-50 mx-auto text-center bg-primary text-white my-2">
        {text.toUpperCase}
      </div>
      <div className="w-50 mx-auto text-center bg-success text-white my-2">
      {text.toUpperCase}
      </div>
      <div className="w-50 mx-auto text-center bg-black text-white my-2">
      {text.toUpperCase}
      </div>
      <div className="w-50 mx-auto text-center bg-warning text-danger my-2">
      {text.toUpperCase}
      </div>
    </>
  );
}
