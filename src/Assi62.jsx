import { useState } from "react";
import "./App.css"

export default function Assi61() {
  let [d, setD] = useState(0);
  

  function handleClick(event) {
    if (event.target.id==`+`) {
      
      setD(d + 10);
    }
    else
    {
      setD(d-10)
    }
    
  }

  return (
    <>
      

       <div className=" text-center mt-2 mx-auto p-2   justify-content-evenly  ">
        <button className="btn btn-primary " id="+" onClick={handleClick} disabled={d==150}>
          Increase size
        </button>
     

      <button className="btn btn-primary " id="-" onClick={handleClick} disabled={d==0}>
          Decrease size
        </button>
      </div>
      <div className="h4 text-center p-3" >{d+`px`} {"  "}{" "} {d+`px`}</div>
      <div
        className="  d-block  mx-auto my-4"
        style={{ backgroundColor: `orange`, width: d + `px`, height: d + `px`,borderRadius:10 }}
        
      ></div> 
      
    </>
  );
}
