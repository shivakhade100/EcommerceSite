import axios from "axios";
import React, { useState } from "react";
import NavBar from "./Navbar";

export default function SignUpPage(props) {
  let { signupstatus } = props;


  function handleSignUpFormSubmit(event) {
    event.preventDefault();
    props.onSignUpFormSubmit(event);
  }
  function handleLoginClick() {
    props.onLoginClick("Login");
    console.log("...");
  }

  // function HandleUsernameChange(event){
  //   event.preventDefault()
  //   axios.push("http://localhost:3000/users",user)

  // }

  //  let [display, setDisplay] = useState(false);
  

  // let { message } = props;
  // let { users } = props;
  // useEffect(() => {
  //     getDataFromRemoteServer();
  //   }, []);

  //  let [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });
  // let [submitted, setSubmitted] = useState(false);

  // let [message, setMessage] = useState("");
  // let [signupstatus, setSignUpStatus] = useState("no");

  // function handleSignUpFormReset(event) {
  //   // event.preventDefault();
  //   setUser("");
  //   // console.log(user)
  // }
  // function setUser(inform){
  //   props.onChange(inform)

  // function handleSignUpFormSubmit(formData) {
  // setFormData({
  //   ...formData,
  //   [e.target.email]: e.target.value,
  // });
  // if (formData == true) {
  //   axios.post("http://localhost:3000/users", formData);
  //   setFormData(formData);
  //   console.log(formData);
  // } else {
  //   // axios.get("http://localhost:3000/users", user);
  //   setFormData(" ");
  // }

  //   setTimeout(() => {
  //     setSubmitted(false);
  //     // alert("Form processed after delay!");
  //   }, 3000);
  // }

  //  function handleChangeInput(e) {
  //   e.preventDefault();
  //   onSubmit(formData);
  //   console.log(formData);
  // }

  //   //let formData = new FormData(event.target);
  //   // let user = {
  //   //   name:"",
  //   //   emailid:"",
  //   //   password:""
  //   // };
  //   // for (let data of FormData) {
  //   //   user[data[0]] = user[data[1]];
  //   // }
  //   user["role"] = "user";
  //   // console.log(user);
  //   checkUserExist(user);
  // }
  // // function setUPPage(action) {
  // //   if (action) {

  // //   }

  // //  }
  // // function handleLoginClick(action) {
  // //   action.setSignUpStatus == "success";
  // // }
  // async function checkUserExist(user) {
  //   let response = await axios.get("http://localhost:3000/users");
  //   let data = await response.data;
  //   let filteredData = data.filter((e, index) => e.email == user.email);
  //   if (filteredData.length >= 1) {
  //     console.log("already Exist");
  //     setSignUpStatus("failed");
  //     setMessage("Sorry.. This Emailid Already  Registered");
  //   } else {
  //     console.log("New User");
  //     addUser(user);
  //   }
  // }
  // async function addUser(user) {
  //   let response = await axios.post("http://localhost:3000/users", user);
  //   setSignUpStatus("success");
  //  setUPPage(action);

  //   function changeInput(){
  // let set=users[index].name

  //   }
  return (
    <>
      {/* {(display =false  && <Page  />)}  */}
      {signupstatus == "success" && (
        <div className="text-center h3 text-danger">
          Signup Successfull{" "}
          <a href="#" onClick={handleLoginClick}>
            Login
          </a>{" "}
          now.
        </div>
      )}
      {signupstatus == "failed" && (
        <div className="text-center pb-3 h5 text-danger">
          Sorry.. This Email-id is already Registered.
        </div>
      )}
      
      
      
      {(signupstatus == "no" || signupstatus == "failed") && (
        <div className="p-3 my-5">
          <div className="text-center p-5   text-decoration-underline  h4 my-3">
            SIGNUP
          </div>
          <div className="row p justify-content-center">
            <div className=" col-sm-12 col-md-6 border border-3 border-dark">
              <form action="" onSubmit={handleSignUpFormSubmit}>
                <div className="row    ">
                  <div className="col-6 p-2  h4  text-end"><label htmlFor="">UserName:</label></div>
                  <div className="col-6 p-2">
                    <input type="name" name="Username" required />
                  </div>{" "}
                  <div className="col-6 p-2  h4 text-end"><label htmlFor="">Email:</label></div>
                  <div className="col-6 p-2 ">
                    <input
                      type="email"
                      name="email"
                      // onChange={(inform) =>
                      //   setUser({ ...users, email: inform.target.value })
                      // }

                      required
                    />
                  </div>
                  <div className="col-6 p-2 h4  text-end "><label htmlFor="">Password:</label></div>
                  <div className="col-6 p-2">
                    <input
                      type="password"
                      name="password"
                      // onChange={(inform) =>
                      //   setUser({ ...users, password: inform.target.value })
                      // }

                      required
                    />
                  </div>
                  <div className="row"></div>
                  <div className=" col-8 p-2 "></div>
                  <div className="my-3 text-center">
                    <input
                      type="submit"
                      value="Ok"
                      className="mx-2    btn  btn-success"
                      // disabled={submitted}
                    />

                    <input
                      type="reset"
                      value="Clear"
                      className="btn  btn-success"
                      // onReset={handleSignUpFormReset}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
// onClick={handleLoginClick}
