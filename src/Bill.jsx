import React, { useState } from "react";
import {
  addBillToBackend,
  getLastBillNumberFromBackend,
  updateBackendLastBillNumber,
} from "./FirebaseBillNumberServices";
import { BeatLoader } from "react-spinners";
// import { updateBackendProduct } from "./FirebaseProductServices";
import { logEvent } from "firebase/analytics";
// import {getProductsFromBackend} from './FirebaseProductServices';

export default function Bill(props) {
  let { CartItems } = props;
  let { totalprice } = props;
  let { name } = props;
  let { user } = props;
  let { message } = props;
  // let [price,setPrice]=useState("")
  // const phonenumber = `8999181372`;

  let [flagLoader, setFlagLoader] = useState(false);
  const currentDate = new Date().toLocaleDateString();
  async function handleBillCreateClick() {
    setFlagLoader(true);
    let b = await getLastBillNumberFromBackend();
    let currentBillNumber = b.lastbillnumber + 1;
    console.log(currentBillNumber);

    let BillObj = {};
    BillObj.billNumber = currentBillNumber;
    BillObj.customer = user.name;
    BillObj.date = new Date();
    BillObj.amount = totalprice;
    BillObj.soldProducts = CartItems;
    BillObj = await addBillToBackend(BillObj);
    b.lastbillnumber = currentBillNumber;
    // let billId = BillObj.id;
    await updateBackendLastBillNumber(b);
    // console.log(billId);
    window.localStorage.setItem("cartItems", JSON.stringify([]));
    let message = `I am ${user.name}.Its link is ${window.location}.My Bill Number is ${currentBillNumber}`;
    setFlagLoader(false);
    window.location =
      "https://api.whatsapp.com/send?phone=918999181372&text=" + message;
  }
  if (flagLoader) {
    return <BeatLoader size={24} color={"red"} className="text-center" />;
  }
  //  async function calculateTotal(){
  //   setFlagLoader(true)
  //   let list=await getProductsFromBackend()
  //   setFlagLoader(false)
  //   let total = 0;

  //     list.forEach((e, index) => {
  //       total += e.totalprice * e.qty;
  //     });
  //     setPrice(total)
  //   //   setTotalPrice(total);
  //   return price
  // }

  return (
    <>
      <div className="my-5 p-5"></div>

      <div className=" col-12    col-lg-12   text-center">
        <button className="btn log" onClick={handleBillCreateClick}>
          Share Bill on WhatsApp
        </button>
      </div>

      <div className="row">
        <div className="  col-12 d-flex justify-content-center   ">
          <div className="mybb  col-lg-6   opacity-75   ">
            <div className=" mx-auto p-2 pb-1  pt-2 my-auto text-center  h5 ">
              || Shree ||
            </div>
            <div className="h3 text-center  "> SK Fruit Bazaar </div>
            <div className="h5 text-center  ">
              220 , Matalwadi Phata ,Bhugaon- 412115
            </div>
            <div className="text-end pe-3  h5">Date: {currentDate} </div>
            <div className="h5 ps-5 ">Customer Name : {user.name}</div>
            <div className="row ">
              <div className="col-4 h5  ">Product</div>
              <div className="col-3 h5  text-start ps-0 ">Rate</div>
              <div className="col-3  h5 text-center   ">Quantity</div>
              <div className="col-2  h5 ">Total</div>
            </div>
            {CartItems.map((e, index) => {
              return (
                <div className="row ">
                  <div className="col-4 text-start h6 ps-3">{`${index + 1}) ${
                    e.name
                  }`}</div>
                  <div className="col-4 text-start ps-0">
                    <div className="">
                      Rs.{" "}
                      <span className="text-decoration-line-through h5 ">
                        {e.mrp}{" "}
                      </span>{" "}
                      <span className="h5">
                        {e.mrp - e.mrp * (e.discount / 100).toFixed(0)}
                      </span>
                    </div>
                  </div>
                  <div className="col-2 h5  ps-0  ">
                    {e.qty} {e.unit}
                  </div>
                  <div className="col-2 h5">
                    {e.mrp - e.mrp * (e.discount / 100).toFixed(0)}
                  </div>
                </div>
              );
            })}
            <div className="row  my-1">
              <div className="col-9  text-end  col-lg-9 h5">Grand Total : </div>
              <div className="col-3 col-lg- text-start  ps-0 h5">
                Rs. {totalprice.toFixed(0)}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
