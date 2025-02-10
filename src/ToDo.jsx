export default function ToDo(props) {
  let {  toDo} = props;
  let {index}=props
  
  
  
  

  

  
  function handleClick() {
   
    console.log(index);
    props.onHandleClick(index);
    
  }
  return (
    <>
      <div className="row my-3 bg-primary p-2">
        <div className="col-8 text-start text-white h5" >
        {toDo}
        </div>

        <div className="col-2 ">
          <button className=" btn btn-danger" onClick={handleClick}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

