import React, { useEffect, useState } from "react";
import ProductPage from "./ProductPage";
import NavBar from "./Navbar";
import SignUpPage from "./SignUpPage";
import Login from "./Login";
import axios from "axios";
import CartPageItems from "./CartPageItems";
// import AdminProductForm from "./AdminProductForm";
import AdminProductPage from "./AdminProductPage";
import Bill from "./Bill";

export default function Ecommerce() {
  // useEffect(() => {
  //   getDataFromServer();
  // }, []);

  let [view, setView] = useState("productPage");
  let [cnt, setCnt] = useState(0);
  let [CartItems, setCartItems] = useState([]);
  let [totalprice, setTotalPrice] = useState(0);
  let [successmessage, setSuccessMessage] = useState(false);

  // let [FilteredList, setFilteredList] = useState([]);
  let [productList, setProductList] = useState([]);
  let [signupstatus, setSignupStatus] = useState("no");
  let [loginStatus, setLoginStatus] = useState("no");
  let [message, setMessage] = useState("");
  // let [target, setTarget] = useState("");
  let [user, setUser] = useState("");

  useEffect(() => {
    getDataFromServer();
    //code... get data from backend
    let storedUser = localStorage.getItem("user");
    let storedCart = localStorage.getItem("CartItems");
    let storedTotalPrice = localStorage.getItem("CartItems");
    let storedLoginStatus = localStorage.getItem("CartItems");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setLoginStatus(storedLoginStatus || "no");
    }

    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
      setCnt(JSON.parse(storedCart).length);
    }

    if (storedTotalPrice) {
      setTotalPrice(parseFloat(storedTotalPrice));
    }
  }, []);

  function handleSignUpFormSubmit(event) {
    let formData = new FormData(event.target);
    let user = {};
    for (let data of formData) {
      user[data[0]] = data[1];
    }
    user["role"] = "user";
    console.log(user);
    checkUserExists(user);
    // setView("productPage");
    // if ((user["role"] = "admin")) {
    //   setView("adminPage");

    // }
  }
  async function getDataFromServer() {
    let information = await axios.get("http://localhost:3000/plist");
    setProductList(information.data);
  }

  async function checkUserExists(user) {
    let response = await axios("http://localhost:3000/users");
    let data = await response.data;
    let filteredData = data.filter((e, index) => e.email == user.email);
    if (filteredData.length >= 1) {
      console.log("Already Exists");
      setTimeout(() => {
        setSignupStatus("");
        setView("productPage");
      }, 1000);
      setSignupStatus("failed");

      // setMessage("Sorry... This email-id is already registered.");
    } else {
      console.log("new user");
      addUser(user);
      // addDataToServer(user)
    }
  }
  async function addUser(user) {
    let response = await axios.post("http://localhost:3000/users", user);
    setSignupStatus("success");
  }

  //Login Operation
  function handleLoginFormSubmit(event) {
    let formData = new FormData(event.target);
    let userData = {};
    for (let data of formData) {
      userData[data[0]] = data[1];
    }
    console.log("ok... logged in");
    console.log(userData);
    checkUser(userData);
  }

  async function checkUser(userData) {
    let response = await axios("http://localhost:3000/users");
    let data = await response.data;
    let filteredData = data.filter(
      (e, index) => e.email == userData.email && e.password == userData.password
    );
    if (filteredData.length == 1) {
      setLoginStatus("success");
      setUser(filteredData[0]);
      let u = filteredData[0];
      localStorage.setItem("user", JSON.stringify(filteredData[0]));
      localStorage.setItem("loginStatus", "success");
      if (u.role == "user") {
        setTimeout(() => {
          setView("productPage");
        }, 3000);
      } else if (u.role == "admin") {
        setTimeout(() => {
          setView("admin");
        }, 3000);
      }
      // addDataToServer(user)
      setSuccessMessage(true);

      // setTimeout(() => {
      //   setSuccessMessage(false);
      //   console.log("Login Successful");
      //   setTimeout(() => {
      //     setView("productPage");
      //   }, 1000);
      // }, 1000);
    } else {
      setLoginStatus("failed");
      clearMessage();
    }
  }

  function handleCartItems() {
    if (cnt <= 0 && totalprice <= 0) {
      setView("noelement");
    } else if (!user) {
      setMessage("You need to login first!");
      console.log("you need to login first");

      setTimeout(() => {
        setMessage("");

        setView("Login");
      }, 1000); // Clear message after 2 seconds
    } else {
      setView("cart");
    }
  }
  // } else {
  //   // setMessage("");
  //   setTimeout(() => {
  //     setMessage("To Process the order you need to Login first!");

  //     setView("Login")

  //   }, );
  //   clearMessage()
  //   // setView("Login");

  //   //  setView("cart")
  //   if (cartentry == "LoginSuccessful") {
  //     setView("cart")
  //   }
  //    setTimeout(() => {
  //      setMessage(""); // Clear message from React state
  //    }, 3000);
  // }

  // console.log("Cart button clicked");
  // setView("cart");
  // console.log(CartItems.length);
  //  handleCartButtonClick()

  //Handle Add to cart operation
  function handleAddToCart(product) {
    console.log(CartItems);

    let temp = [...productList];
    let index = temp.indexOf(product);
    let newProduct = { ...temp[index] };

    if (newProduct.qty === 0) {
      newProduct.qty++;
      setCnt(cnt + 1);
      temp[index] = newProduct;
      setProductList([...temp]);

      setCartItems([...CartItems, newProduct]);
      setTotalPrice(
        totalprice + newProduct.mrp * (1 - newProduct.discount / 100).toFixed(1)
      );
    }
    let updatedCart;
    if (CartItems && CartItems.length > 0) {
      updatedCart = [...CartItems];
    } else {
      updatedCart = [];
    }
    updatedCart.push(newProduct);
    setCartItems(updatedCart);
  }
  //Handle "+"
  function handleIncrement(product) {
    let temp = [...productList];
    let index = temp.indexOf(product);
    let newProduct = { ...temp[index] };
    newProduct.qty++;
    temp[index] = newProduct;
    setProductList([...temp]);

    //Update Cart Items and total price
    let updatedCart = CartItems.map((item) =>
      item.id === product.id ? { ...item, qty: item.qty + 1 } : item
    );
    setCartItems(updatedCart);

    setTotalPrice(
      totalprice + product.mrp * (1 - product.discount / 100).toFixed(1)
    );
    console.log(updatedCart);
  }
  //Handle "-"
  function handleDecrement(product) {
    let temp = [...productList];
    let index = temp.indexOf(product);
    let newProduct = { ...temp[index] };
    newProduct.qty--;
    temp[index] = newProduct;
    setProductList([...temp]);

    let updatedCart;
    console.log(updatedCart);

    if (newProduct.qty === 0) {
      setCnt(cnt - 1); // Reduce cart count
      updatedCart = CartItems.filter((item) => item.id !== product.id); // Remove item from cart
    } else {
      updatedCart = CartItems.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty - 1 } : item
      );
    }

    setCartItems(updatedCart);

    // If cart is empty, reset total price to 0
    if (updatedCart.length === 0) {
      setTotalPrice(0);
    } else {
      setTotalPrice(
        totalprice - product.mrp * (1 - product.discount / 100).toFixed(1)
      );
    }
    console.log(updatedCart);
  }

  //Sign_UP & Login Button Handle
  function handleFormButtonClick(view) {
    console.log(view);
    setView(view);
  }

  //handle logout button clicked
  function handleLogoutClick() {
    setUser(null); // Clear user data
    setView("productPage");
    setLoginStatus("no"); // Reset login status
    setSignupStatus("no"); // Reset signup status (if needed)
    setMessage(); // Clear any messages
    localStorage.removeItem("user");
    localStorage.removeItem("loginStatus");

    //  setView("Login");
  }

  // login click button after signup form
  function handleLoginClick(event) {
    setView(event);
    // setView("product");
    console.log(view);
  }
  function handleDeleteCartAdmin(product, flag) {
    if (flag) {
      deleteProductFromServer(product);
    } else {
      setMessage("Delete operation cancelled");
      clearMessage();
    }
  }

  async function deleteProductFromServer(product) {
    let response = await axios.delete(
      "http://localhost:3000/plist/" + product.id
    );

    let list = productList.filter((e, index) => e.id != product.id);
    console.log("list in delete ecom");
    console.log(list);
    setProductList(list);
    setMessage(`Product - ${product.name} deleted successfully`);
    clearMessage();
  }
  function clearMessage() {
    setTimeout(() => {
      setMessage(""); // Clear message from React state
    }, 1000);
  }

  function handleProductAddEditFormSubmit(list) {
    setProductList(list);
  }
  function calculateTotal(f) {
    let total = 0;
    f.forEach((e, index) => {
      total += e.totalprice * e.qty;
    });
    setTotalPrice(total);
  }
  function handleChangeButtonClick(op, e) {
    //console.log(op);
    let p = [...productList];
    let cItems = [...CartItems];
    let index = p.indexOf(e);

    if (op == "+") {
      p[index].qty = p[index].qty + 1;
      cItems = cItems.map((f) => {
        if (f.id == e.id) return e;
        else return e;
      });
      setCartItems(cItems);
    } else if (op == "-") {
      p[index].qty = p[index].qty - 1;
      if (p[index].qty == 0) {
        setCnt(cnt - 1);
        cItems = cItems.filter((f) => f.id != e.id);
        setCartItems(cItems);
      }
    } else if (op == "addtocart") {
      p[index].qty = 1;
      setCnt(cnt + 1);
      cItems.push(e);
      //setCartItems(product);
      setCartItems(cItems);
    }
    calculateTotal(p);
    setProductList(p);
  }

  // function handleCartButtonClick() {
  //   //setView("CartList");
  //   if (cnt <= 0 && totalprice <= 0) {
  //     setView("noelement");
  //   } else {
  //     setMessage("To Process the order you need to Login first!");
  //     setView("Login");
  //     setTimeout(() => {
  //       setMessage(""); // Clear message from React state
  //     }, 3000);
  //     if (cartentry == "LoginSuccessful") {
  //       setView("cart");
  //     }
  //   }
  // }
  function handleBackButtonClick() {
    setView("productPage");
  }
  function handleStartButtonClick() {
    setView("productPage");
  }
  function handleBuyButtonClick() {
    setView("bill");
  }
  //list button check
  // function handleProductListClick(view){
  //   setView(view)
  // }
  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-12">
        <NavBar
          cnt={cnt}
          totalprice={totalprice}
          CartItems={CartItems}
          user={user}
          onFormButtonClick={handleFormButtonClick}
          // onCartButtonClick={handleCartButtonClick}
          onLogoutClick={handleLogoutClick}
          onCartItems={handleCartItems}
        ></NavBar>
      </div>
      <div className="  colour">
        {view == "productPage" && (
          <div className="col-lg-12 col-sm-12 col-md-6">
            <ProductPage
              productList={productList}
              onFormButtonClick={handleFormButtonClick}
              onAddToCart={handleAddToCart}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
            ></ProductPage>
          </div>
        )}
        {view == "Login" && (
          <Login
            user={user}
            view={view}
            loginStatus={loginStatus}
            onClick={handleFormButtonClick}
            onLoginFormSubmit={handleLoginFormSubmit}
            onLoginClick={handleLoginClick}
          />
        )}
        {view == "SignUp" && (
          <SignUpPage
            view={view}
            signupstatus={signupstatus}
            onFormButtonClick={handleFormButtonClick}
            onSignUpFormSubmit={handleSignUpFormSubmit}
            onLoginClick={handleLoginClick}

            // users={user}
            // onChange={checkUser}
          />
        )}
        {view == "cart" && (
          <div className="col-sm-12 col-md-6 col-lg-12">
            <CartPageItems
              CartItems={CartItems}
              totalprice={totalprice}
            
              // product={product}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              // onChangeButtonClick={handleChangeButtonClick}
              onBackButtonClick={handleBackButtonClick}
              onBuyButtonClick={handleBuyButtonClick}
            />
          </div>
        )}
        {view == "bill" && (
          <div className="col-lg-12 bg-info">
            <Bill
              // onChangeButtonClick={handleChangeButtonClick}
              totalprice={totalprice}
              // name={name}
              CartItems={CartItems}
            />
          </div>
        )}
        {view == "noelement" && (
          <div className="my-5 p-5 col-lg-12 col-sm-12 col-md-6">
            <div className=" p-3    text-center my-5 h4 ">
              Cart is Empty.{" "}
              <a href="#" onClick={handleStartButtonClick}>
                Start
              </a>{" "}
              Shopping.
            </div>
          </div>
        )}
        {/* {view == "admin" && <AdminProductForm adminView={adminView} />} */}
        {view == "admin" && (
          <div className=" col-lg-12 col-sm-12 col-md-6">
            <AdminProductPage
              productList={productList}
              view={view}
              onDeleteCartAdmin={handleDeleteCartAdmin}
              onProductEditFormSubmit={handleProductAddEditFormSubmit}
              onProductAddFormSubmit={handleProductAddEditFormSubmit}
              // onProductListClick={handleProductListClick}
            />
          </div>
        )}
      </div>
    </>
  );
}
