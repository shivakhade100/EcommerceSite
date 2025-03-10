import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBar(props) {
  let { cnt } = props;
  let { product } = props;
  let { totalprice } = props;
  let { view } = props;
  let { user } = props;
  let { name } = props;
  let { loginStatus } = props;

  let { cItems } = props;
  // let { Qty } = props;

  // function handleLoginButtonClick() {
  //   console.log("login clicked");

  //   props.onLoginButtonClick();
  // }
  function handleFormButtonClick(view) {
    props.onFormButtonClick(view);
  }
  function handleCartItems() {
    props.onCartItems(view);
  }
  function handleLogoutClick() {
    props.onLogoutClick();
  }
  function handleChangeKeyUp(event) {
    props.onChangeKeyUp(event);
  }
  // function handleCartButtonClick(v) {
  //   props.onCartButtonClick(v);
  // }
  // function handleQtyClick(displayprice){
  //   console.log(displayprice);

  //   props.onChangeClick(displayprice)
  // }

  return (
    <>
      <div className="my-5 p-2"></div>
      <div className=" row    fixed-top align-items-center justify-content-around bg    ">
        <div
          className="col-4 col-lg-2        "
          id=" logo"
          onClick={() => handleFormButtonClick("productPage")}
        >
          <img
            className="img-fluid bor   w-50 h-25"
            src="download.jpeg"
            alt=""
          />
        </div>
        <div className="col-5    text-center  col-sm-6 col-md-12  col-lg-5  ">
          {/* if user is filled its information successfully then show them logout button for exit */}
          {loginStatus == "success" && (
            <div className=" text-dark h5">Welcome {name} </div>
          )}

          {user ? (
            <>
              <div className="h4 col-2   justify-content-between  ps-4 col-lg-9 ">
                <button
                  className="btn btn-primary  "
                  onClick={handleLogoutClick}
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <button
                className="btn btn-primary log  mx-2 "
                onClick={() => {
                  handleFormButtonClick("SignUp");
                }}
              >
                SignUp
              </button>

              <button
                className="btn btn-primary log  mx-2"
                onClick={() => {
                  handleFormButtonClick("Login");
                }}
              >
                Login
              </button>
            </>
          )}
        </div>
        <div className=" cart col-sm-12 col-lg-3    text-end col-3   ">
          <div className="cartbtn">
            <button className="cartbtn radius" onClick={handleCartItems}>
              <i className=" bi-cart2 fs-1  ">
                {cnt} <div className="text-center h6">Rs. {totalprice}</div>
              </i>
            </button>
          </div>
        </div>
        {view != "productPage" ? (
          ""
        ) : (
          <div className="text-center    bg">
            <input
              type="text"
              name="text"
              size="50"
              id=""
              placeholder="Search  Fruits"
              onKeyUp={handleChangeKeyUp}
              className=" text-opacity-50  "
            />
          </div>
        )}
      </div>
    </>
  );
}
