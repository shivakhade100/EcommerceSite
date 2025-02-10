import { useState } from "react";
import "./App.css";
import Btngrp from "./Btngrp";
import Singer from "./Singer";

export default function Assi67() {
  let singers = ["arjit", "shreya", "sonu"];
  let [imageName, setImageName] = useState("");
  function handleClick(index) {
    // console.log(singers[index]);
    setImageName(singers[index]);
  }
  return (
    <>
      <Btngrp singers={singers} onButtonClick={handleClick} />
      <Singer imageName={imageName} />
    </>
  );
}
