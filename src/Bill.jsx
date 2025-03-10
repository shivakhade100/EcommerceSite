import React from "react";

export default function Bill(props) {
  let { CartItems } = props;
  let {totalprice} = props;
  let {name} = props;
  let {user}=props
  const currentDate=new Date().toLocaleDateString()
  return (
    <>
    <div className="my-5 p-5"></div>
      {
        <div className="">
          <div className=" col-12 col-lg-12 mycontainer text-white text-center">
            <a href="#">Share</a> Bill on WhatsApp
          </div>

          <div className="mybb ">
            <div className=" mx-auto p-2 pb-1 pt-2 my-auto text-center text-white h5 ">
              || Shree ||
            </div >
            <div className="h3 text-center text-white"> SK Fruit Bazaar </div>
            <div className="h5 text-center text-white">220 , Matalwadi Phata ,Bhugaon- 412115</div>
            <div className="text-end pe-3 text-white h5">Date: {currentDate} </div>
            <div className="h5 ps-5 text-white">Customer Name : {user.name}</div>

            <div className="row text-white">
              <div className="col-4 h5  ">Product</div>
              <div className="col-3 h5  text-start ps-0 ">Rate</div>
              <div className="col-3  h5 text-center   ">Quantity</div>
              <div className="col-2  h5 ">Total</div>
            </div>

            {CartItems.map((e, index) => {
              return (
                <div className="row text-white">
                  <div className="col-4 text-start h5 ps-3">{`${index + 1}) ${
                    e.name
                  }`}</div>
                  <div className="col-4 text-start ps-0">
                    <div className="">
                      Rs.{" "}
                      <span className="text-decoration-line-through h5 ">
                        {e.mrp}{" "}
                      </span>{" "}
                      <span className="h5">{e.mrp - e.mrp * (e.discount / 100).toFixed(1)}</span>
                    </div>
                  </div>
                  <div className="col-2 h5  ps-0  ">
                    {e.qty} {e.unit}
                  </div>
                  <div className="col-2 h5">{e.mrp - e.mrp * (e.discount / 100).toFixed(1)}</div>
                </div>
              );
            })}

            <div className="row text-white my-1">
              <div className="col-9  text-end  col-lg-9 h5">Grand Total : </div>
              <div className="col-3 col-lg- text-start  ps-0 h5">Rs. {totalprice} </div>
            </div>
          </div>
        </div>
      }
      
    </>
  );
}
