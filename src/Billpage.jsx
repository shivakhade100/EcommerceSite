import React from "react";
// import { addBackendDataToBill } from "./FirebaseBillNumberServices";

export default function Billpage(props) {
  // let {user}=props
  // // let { CartItems } = props;
  // let { totalprice } = props
  // let {data}=props;
  let {bills}=props
  const currentDate = new Date().toLocaleDateString();
  // console.log(bill.data("soldProducts"))
  

  // async function name(params) {
    
  //   let data=await addBackendDataToBill()
  // } 

  return <>
  <div className=" my-4 p-4"></div>
<div className="row">
        <div className="  col-12 d-flex justify-content-center   ">
          <div className="mybb  col-lg-6   opacity-75   ">
            <div className=" mx-auto p-2 pb-1  pt-2 my-auto text-center  h5 ">
              || Shree ||
            </div>
            <div className="h3 text-center  "> SKians Shoes </div>
            <div className="h5 text-center  ">
              220 , Matalwadi Phata ,Bhugaon- 412115
            </div>
            <div className="text-end pe-3  h5">Date: {currentDate} </div>
            <div className="h5 ps-5 ">Customer Name : {bills.customer}</div>
            <div className="row ">
              <div className="col-4 h5  ">Product</div>
              <div className="col-3 h5  text-start ps-0 ">Rate</div>
              <div className="col-3  h5 text-center   ">Quantity</div>
              <div className="col-2  h5 ">Total</div>
            </div>

            {bills.soldProducts.map((e, index) => {
            
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
                        {e.mrp - e.mrp * (e.discount / 100)}
                      </span>
                    </div>
                  </div>
                  <div className="col-2 h5  ps-0  ">
                    {e.qty} {e.unit}
                  </div>
                  <div className="col-2 h5">
                    {e.mrp - e.mrp * (e.discount / 100)}
                  </div>
                </div>
              
            })}
            <div className="row  my-1">
              <div className="col-9  text-end  col-lg-9 h5">Grand Total : </div>
              <div className="col-3 col-lg- text-start  ps-0 h5">
                Rs. {bills.amount}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
  </>;
}
