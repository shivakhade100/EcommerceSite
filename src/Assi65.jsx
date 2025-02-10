import { useState } from "react";
import "./App.css";

export default function Assi65() {
  let [product, setProduct] = useState({
    name: "Parle-G",
    image: "parleg",
    mrp: 10,
    qty: 0,
    total: 0,
  });
  function handlebuttonclick() {
    let p = { ...product };
    p.qty = 1;
    p.total = p.qty * p.mrp;

    setProduct(p);
  }
  function changeclick(ch) {
    let p = { ...product };

    if (ch == `+`) {
      p.qty++;
      p.total = p.qty * p.mrp;
    } else {
      p.qty--;
      p.total = p.qty * p.mrp;
    }

    setProduct(p);
  }

  return (
    <>
      <div className="border border-danger border-4 p-4 container w-25 mx-auto">
        <div className="my-3">
          <img className="img-fluid" src="/parleg.jpg" alt="Not available" />
        </div>
        <div className="name my-3">{product.name}</div>
        <div className="mrp my-3">Rs. {product.total}/-</div>

        <div className="row">
          <div className="col-4">
            <button
              className="btn btn-primary btn-block"
              id="-"
              onClick={() => changeclick(`-`)}
              disabled={product.qty == 0}
            >
              -
            </button>{" "}
          </div>
          <div className="col-4">Qnty: {product.qty}</div>
          <div className="col-4">
            <button
              className="btn btn-primary btn-block"
              id="+"
              onClick={() => changeclick(`+`)}
            >
              +
            </button>{" "}
          </div>
          <div className=" text-center">
            <button
              className="btn btn-primary  "
              id="*"
              onClick={() => handlebuttonclick(`*`)}
            >
              Add to Cart
            </button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
