import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBar(props) {
  let { cnt } = props;
  let { p } = props;
  let { totalprice } = props;
  let { view } = props;
  let { user } = props;

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
  // function handleQtyClick(displayprice){
  //   console.log(displayprice);

  //   props.onChangeClick(displayprice)
  // }

  return (
    <>
      <div className=" row     align-items-center justify-content-around  bg    ">
        <div
          className="col-2   "
          id=" logo"
          onClick={() => handleFormButtonClick("productPage")}
        >
          <img className="     w-50 h-50 " src="download.jpeg" alt="" />
        </div>
        <div className="col-7 text-center  ">
          {/* if user is filled its information successfully then show them logout button for exit */}
          {user ? (
            <button
              className="btn btn-primary  m-2"
              onClick={handleLogoutClick}
            >
              Logout
            </button>
          ) : (
            <>
              <button
                className="btn btn-primary log m-2 "
                onClick={() => {
                  handleFormButtonClick("SignUp");
                }}
              >
                SignUp
              </button>

              <button
                className="btn btn-primary log m-2"
                onClick={() => {
                  handleFormButtonClick("Login");
                }}
              >
                Login
              </button>
            </>
          )}
        </div>
        <div className=" cart col-sm-12 col-lg-1 ">
          <div className="cartbtn">
            <button
              className="cartbtn"
              onClick={() => {
                handleCartItems("cart");
              }}
            >
              <i className="bi bi-cart3 fs-1 ">{cnt}</i>
            </button>
            <div className="text-center">Rs. {totalprice}</div>
          </div>
        </div>
      </div>
    </>
  );
}
