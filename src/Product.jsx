import "./index.css";

export default function Product(props) {
  let { product } = props;
  let { index } = props;
  let finalprice =
    // product.mrp - product.mrp * (product.discount / 100).toFixed(1);
    product.mrp - product.discount * 0.01 * product.mrp;
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
    <div className="    col-lg-2 col-sm-12 col-md-6 col-5 myb mx-2    bg    card  text-lg-center   m-lg-3     my-3   p-lg-4 p-2  radius       ">
      <div className=" position-absolute   col-lg-3  col-5 h6   circle   ">
        {product.discount > 0 && ` ${product.discount}%off `}
      </div>
      {/* <div className="">
          {product.discount == 0 && ""}
        </div>  */}

      <img className="img-fluid" src={product.image} alt="" />

      <div className="h5 my clr">
        {product.name}{" "}
        {/* {product.discount > 0 ? ` -(${product.discount}%)` : " "} */}
      </div>
      {product.discount === 0 && <h6> Rs {product.mrp}</h6>}
      {product.discount != 0 && (
        <h6>
          Rs{" "}
          <span className=" text-decoration-line-through clr">
            {product.mrp}
          </span>{" "}
          {finalprice}
        </h6>
      )}

      <div className=" my-3  me-auto ms-auto p-2  mt-auto mb-auto">
        {product.qty === 0 && (
          <button
            className={product.inStock ? " button1 " : " btn  btn-danger"}
            disabled={!product.inStock}
            onClick={handleAddToCart}
          >
            {product.inStock ? "Add to Cart" : "out of stock"}
          </button>
        )}
      </div>

      {product.qty != 0 && (
        <div className="row   d-flex pe-3  ">
          <div className="col-3     col-sm-12 col-lg-3    ">
            <button
              className="  button1   my-0 "
              id="-"
              onClick={() => {
                handleDecrement(product);
              }}
            >
              -
            </button>{" "}
          </div>
          <div className=" col-6    text-center  col-lg-6     clr h7 ">
            <div className=" col-lg-12  col-12 ">qty: {product.qty} </div>
            <div className=" col-lg-12 col-12">
              {product.qty != 0 ? `Rs:${displayprice.toFixed(2)}` : " "}
            </div>
            {/* <div className="col-1 col-lg-5  clr "></div> */}
          </div>

          <div className="col-3       col-lg-3    ">
            <button
              className="   button1 "
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
  );
}
