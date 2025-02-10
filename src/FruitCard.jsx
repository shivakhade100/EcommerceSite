export default function FruitCard(props){
let {f}=props
console.log(index);

    return (<div>
    
    
    <div className="myb w-25 text-center mx-auto mt-2  ">
        <h1>{f.name}</h1>
        <div className=" img-fluid w-50 h-50"><img src={`/images_fruits/${f.image}`} alt="" /></div>
    </div>
    
    </div>)
}