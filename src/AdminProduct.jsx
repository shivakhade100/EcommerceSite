import "./index.css";

export default function AdminProduct(props) {
  let { product } = props;
  let { index } = props;

  let finalprice =
    product.mrp - product.mrp * (product.discount / 100).toFixed(1);
  let displayprice = product.qty * finalprice;
  // console.log(product.name);
  function handleAddCartAdmin() {
    props.onAddToCartAdmin(product);
  }
  function handleDeleteCartAdmin(){
    let ans = window.confirm(
      "Do you really want to delete  -  " + product.name
    )
    if (ans) {
      props.onDeleteCartAdmin(product, true);
    } else {
      props.onDeleteCartAdmin(product, false);
    }
  }
  // function handleIncrement() {
  //   props.onIncrement(product);
  // }
  // function handleDecrement() {
  //   props.onDecrement(product);
  // }
  // function handleQtyClick(displayprice) {
  //   props.onChangeClick(displayprice);
  // }

  return (
    <div className="    col-12 col-lg-3    p-2    mt-2   ">
      <div className="myc    bg-opacity-75  bg-body  p-2  radius p-1">
        <div className=" ">
          <div className=" position-absolute  h3 radius myd  ">
            {product.discount > 0 ? ` ${product.discount}% Discount` : " "}
          </div>
          <img className="  img-fluid   " src={product.image} alt="" />
        </div>
        <div className="h3 clr">
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
        <div className="row ">
          <div className="  col-6 col-sm-12 col-lg-6      ">
            <button className="  butonadmin mx-5   " onClick={handleAddCartAdmin}>
              <i class="bi bi-bag-plus-fill"></i>
            </button>
            </div>
            <div className="col-6 col-sm-12   col-lg-6   ">
              <button className="  butonadmin    " onClick={handleDeleteCartAdmin}>
                <i class="bi bi-trash"></i>
              </button>
            </div>
          
        </div>
      </div>
    </div>
  );
}
