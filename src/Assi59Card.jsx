import "./App.css";

export default function Assi59Card(props) {
  let { f } = props;
  let finalprice = (f.mrp - f.mrp * (f.discount / 100));
  return (
    <>
      <div className="myb w-25 text-center mx-auto mt-2  ">
        <div className=" p-2">
          <img src={f.image} alt="" />
        </div>
        <h1>
          {f.name} {f.discount > 0 ? ` -(${f.discount}%)` : " "}
        </h1>

        {f.discount == 0 && <h1> Rs {f.mrp}</h1>}
        {f.discount != 0 && (
          <h1>
            Rs <span className=" text-decoration-line-through">{f.mrp}</span>{" "}
            {finalprice}
          </h1>
        )}

        <div className="text-center">
          <button
            className={"btn" + (f.instock ? "btn-primary " : " btn-secondary")}
          >
            {f.inStock ? "Add to cart" : "Out of stock"}
          </button>
        </div>
      </div>
    </>
  );
}
