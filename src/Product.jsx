import "./index.css";

export default function Product(props) {
  let { product } = props;
  let { index } = props;
  let finalprice =
    product.mrp - product.mrp * (product.discount / 100).toFixed(1);
  let displayprice = product.qty * finalprice;
  // console.log(product.name);
  function handleAddToCart() {
    props.onAddToCart(product);
  }
  function handleIncrement() {
    props.onIncrement(product);
  }
  function handleDecrement() {
    props.onDecrement(product);
  }
  // function handleQtyClick(displayprice) {
  //   props.onChangeClick(displayprice);
  // }

  return (
    <div className="    col-6    p-3    mt-2   col-lg-3 col-sm-6 col-md-12 ">
      <div className="myc    bg-opacity-75  bg-body  p-2  radius p-1">
        <div className=" ">
          <div className=" position-absolute  h3 radius myd  ">
            {product.discount > 0 ? ` ${product.discount}% Discount` : " "}
          </div>
          <img className="    img-fluid" src={product.image} alt="" />
        </div>
        <div className="h3 my clr">
          {product.name}{" "}
          {/* {product.discount > 0 ? ` -(${product.discount}%)` : " "} */}
        </div>
        {product.discount == 0 && <h5> Rs {product.mrp}</h5>}
        {product.discount != 0 && (
          <h4>
            Rs{" "}
            <span className=" text-decoration-line-through clr">
              {product.mrp}
            </span>{" "}
            {finalprice}
          </h4>
        )}

        {product.qty == 0 && (
          <button
            className={product.inStock ? "btn buton " : " btn btn-danger"}
            disabled={!product.inStock}
            onClick={handleAddToCart}
          >
            {product.inStock ? "Add to Cart" : "out of stock"}
          </button>
        )}

        {product.qty != 0 && (
          <div className="row   ">
            <div className="col-1  col-sm-12 col-lg-2   radius ">
              <button
                className=" radius buton  "
                id="-"
                onClick={() => {
                  handleDecrement(product);
                }}
              >
                -
              </button>{" "}
            </div>
            <div className=" col-2    col-lg-5    mx-4 clr h6 ">
              qty: {product.qty}{" "}
              {product.qty != 0 ? ` Rs ${displayprice}` : " "}
              {/* <div className="col-1 col-lg-5  clr "></div> */}
            </div>

            <div className="col-1   col-lg-3   text-end  ">
              <button
                className=" radius  buton "
                id="+"
                onClick={() => {
                  handleIncrement(product);
                }}
              >
                +
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
