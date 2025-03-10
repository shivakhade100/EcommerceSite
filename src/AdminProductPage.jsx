import React, { useState } from "react";
import Product from "./Product";
import AdminProduct from "./AdminProduct";
import AdminProductForm from "./AdminProductForm";

export default function AdminProductPage(props) {
  let { productList } = props;
  let { view } = props;
  let [adminView, setAdminView] = useState("list");
  let [selectedProduct, SetSelectedProduct] = useState("");

  function handleLIstFormClick() {
    setAdminView("add");
  }
  function handleProductListClick(event) {
    setAdminView(event);
  }
  function handleAddToCartAdmin(product) {
    setAdminView("edit");
    SetSelectedProduct(product);
    // console.log();
  }
  function handleDeleteCartAdmin(product, flag) {
    props.onDeleteCartAdmin(product, flag);
  }
  function handleProductAddEditFormSubmit(product) {
    // console.log("product in adminproduct pg");
    // console.log(product);
    if (adminView == "edit") {
      console.log("for Edit");
      let list = [...productList]; // copy of array object ... rest parameters
      list = list.map((e, index) => {
        if (e.id == product.id) {
          return product;
        } else {
          return e;
        }
      });

      props.onProductEditFormSubmit(list);
      setAdminView("list");
    } else if (adminView == "add") {
      console.log("for Add");
      let list = [...productList];
      list.push(product);
      props.onProductAddFormSubmit(list);
      setAdminView("list")
    }
  }

  // let { displayprice } = props;

  // function handleAddButtonClick(product, action) {
  //   props.onButtonClick(product, action);
  //   // props.onButtonClick(displayprice)
  //   // console.log(displayprice);
  // }
  // function handleQtyClick(displayprice) {
  //   props.onChangeClick(displayprice);
  // }
  //   function handleAddToCart(product) {
  //     props.onAddToCart(product);
  //   }
  //   function handleIncrement(product) {
  //     props.onIncrement(product);
  //   }
  //   function handleDecrement(product) {
  //     props.onDecrement(product);
  //   }

  return (
    <>
      <div className=""></div>
      {adminView == "list" && (
        <div className=" text-center      text-white html  ">
          <a href="#" className="h5" onClick={handleLIstFormClick}>
            {" "}
            Add the new product
          </a>
        </div>
      )}
      {adminView == "list" && (
        <div className="row  html  p-5   text-center ">
          {productList.map((e, index) => (
            <AdminProduct
              product={e}
              key={index}
              index={index}
              onAddToCartAdmin={handleAddToCartAdmin}
              onDeleteCartAdmin={handleDeleteCartAdmin}

              // onButtonClick={handleAddButtonClick}

              // onChangeClick={handleQtyClick}
            />
          ))}
        </div>
      )}

      {(adminView == "add" || adminView == "edit") && (
        <div className="  html  p-5  vh-100 text-center ">
          <AdminProductForm
            adminView={adminView}
            productList={productList}
            selectedProduct={selectedProduct}
            onProductListClick={handleProductListClick}
            onProductAddFormSubmit={handleProductAddEditFormSubmit}
            onProductEditFormSubmit={handleProductAddEditFormSubmit}
          />
        </div>
      )}
    </>
  );
}
