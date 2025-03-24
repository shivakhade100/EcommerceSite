import React from "react";

export default function Billpage() {
    let BillObj={
        currentBillNumber:"",
        billNumber:"",
        customer:"",
        date:"",
        amount:"",
        soldProducts:"",
    } ;
   
    let currentBillNumber=b.lastbillnumber+1;
    BillObj.billNumber=currentBillNumber;
    BillObj.customer =user.name
    BillObj.date=new Date()
    BillObj.amount=calculateTotal()
    BillObj.soldProducts=CartItems;

  return <>
  <div className="row">
              <div className="col-4 col-sm-6 my-2 text-end">Name</div>
              <div className="col-6 my-2  text-start">
                <input
                  type="text"
                  name="currentBillNumber"
                  id=""
                  required
                  value={product.name}
                //   onChange={handleTextChange}
                //   onBlur={handleBlur}
                //   onFocus={handleFocus}
                />
              </div>
              <div className="col-4 col-sm-6 my-2 text-end">Name</div>
              <div className="col-6 my-2  text-start">
                <input
                  type="text"
                  name="currentBillNumber"
                  id=""
                  required
                  value={product.name}
                //   onChange={handleTextChange}
                //   onBlur={handleBlur}
                //   onFocus={handleFocus}
                />
              </div>
              <div className="col-4 col-sm-6 my-2 text-end">Name</div>
              <div className="col-6 my-2  text-start">
                <input
                  type="text"
                  name="user"
                  id=""
                  required
                  value={user.name}
                //   onChange={handleTextChange}
                //   onBlur={handleBlur}
                //   onFocus={handleFocus}
                />
              </div>
              <div className="col-4 col-sm-6 my-2 text-end">Name</div>
              <div className="col-6 my-2  text-start">
                <input
                  type="text"
                  name="user"
                  id=""
                  required
                  value={user.name}
                //   onChange={handleTextChange}
                //   onBlur={handleBlur}
                //   onFocus={handleFocus}
                />
              </div>
              <div className="col-4 col-sm-6 my-2 text-end">Name</div>
              <div className="col-6 my-2  text-start">
                <input
                  type="text"
                  name="currentBillNumber"
                  id=""
                  required
                  value={product.name}
                //   onChange={handleTextChange}
                //   onBlur={handleBlur}
                //   onFocus={handleFocus}
                />
              </div>
              </div>
  </>;
}
