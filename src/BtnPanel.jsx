export default function BtnPanel(props) {
    let { values } = props;
    let { score } = props;
  function handleClick(index){
  props.onbtnClick(index)}
    return (
      <>
       <div className="text-center mt-5 ">
        {values.map((e, index) => (
          <button
            className="btn btn-primary mx-2" onClick={()=>{handleClick(index)}}
           key={index} disabled={score+e<0}>
            {e}
            
          </button>
        ))}
      </div></>)}