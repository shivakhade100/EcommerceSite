// import "./App.css";
export default function Btngrp(props) {
  let { singers } = props;
  function handleClick(index){
  props.onButtonClick(index)
}
  return (
    <>
      <div className="text-center m-2 ">
        {singers.map((e, index) => (
          <button
            className="btn btn-primary  m-4"
            onClick={() => {
              handleClick(index);
            }} key={index}
          >
           { singers[index]}
          </button>
        ))}
      </div>
    </>
  );
}
