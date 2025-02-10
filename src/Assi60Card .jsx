import "./App.css";

export default function Assi60Card(props) {
  let { f } = props;

  return (
    <>
      
     
      
          <div className="col-3   myb ">
          
            <div className=" h3 text-center">{f.name}</div>
            <div><img className=" myi img-fluid " src={f.image} alt="" /></div>
            <div className=" bg-secondary-subtle">{f.info}</div>
          </div>
       
      
    </>
  );
}
