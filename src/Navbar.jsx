import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBar(props) {
  let { cnt } = props;
  let { product } = props;
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
  // function handleCartButtonClick(v) {
  //   props.onCartButtonClick(v);
  // }
  // function handleQtyClick(displayprice){
  //   console.log(displayprice);

  //   props.onChangeClick(displayprice)
  // }

  return (
    <>
      <div className=" row    fixed-top  align-items-center justify-content-around  bg    ">
        <div
          className="col-4 col-lg-2     "
          id=" logo"
          onClick={() => handleFormButtonClick("productPage")}
        >
          <img
            className="img-fluid bor   w-50 h-25"
            src="download.jpeg"
            alt=""
          />
        </div>
        <div className="col-5 col-lg-3   col-sm-6 col-md-12   ">
          {/* if user is filled its information successfully then show them logout button for exit */}
          {user ? (
            <>
              <div className="h4">
                welcome {user.name} !{" "}
                <button
                  className="btn btn-primary  m-2"
                  onClick={handleLogoutClick}
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <button
                className="btn btn-primary log  "
                onClick={() => {
                  handleFormButtonClick("SignUp");
                }}
              >
                SignUp
              </button>

              <button
                className="btn btn-primary log "
                onClick={() => {
                  handleFormButtonClick("Login");
                }}
              >
                Login
              </button>
            </>
          )}
        </div>
        <div className=" cart col-sm-12 col-lg-1 col-3  ">
          <div className="cartbtn">
            <button className="cartbtn radius" onClick={handleCartItems}>
              <i className=" bi-cart2 fs-1  ">
                {cnt} <div className="text-center h6">Rs. {totalprice}</div>
              </i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
