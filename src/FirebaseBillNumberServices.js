import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";

async function importBackendDataToBill(billId) {
  const lastbill = await getDoc(doc(db, "bills",billId));
  if (lastbill.exists()) {
    console.log(lastbill.data());
    return lastbill;
  } else {
    return null;
  }
}

async function getLastBillNumberFromBackend() {
  const response = await getDocs(collection(db, "lastBillnumber"));
  let lastnum = [];
  response.forEach((doc) => {
    lastnum.push({ id: doc.id, ...doc.data() });
    //   obj.id = doc.id;
    //   lastnum.push(obj);
  });
  return lastnum[0];
}
// async function addBillToBackend(BillObj) {
//   const billRef = await addDoc(collection(db, "bills"), BillObj.id);
//   let list = [];
//   billRef.forEach((doc) => {
//     let obj = { ...doc.data() };
//     obj.id = doc.id;
//     list.push(obj);
//   });
//   return list;
//   // console.log("Document written with ID: ", billRef.id);
// }
async function addBillToBackend(BillObj) {
  const productRef = await addDoc(collection(db, "bills"), BillObj);
  console.log("Document written with ID: ", productRef.id);
}
async function updateBackendLastBillNumber(b) {
  const BillRef = doc(db, "lastBillnumber", b.id);
  await updateDoc(BillRef, b);
}

// async function importBackendDataToBill() {
//   const response = await getDocs(collection(db, "bills"));
//   let data = [];
//   response.forEach((doc) => {
//     data.push({ id: doc.id, ...doc.data() });
//     //   obj.id = doc.id;
//     //   lastnum.push(obj);
//   });
//   console.log(data[22]);
//   return data[0];
  
// }
export {
  getLastBillNumberFromBackend,
  addBillToBackend,
  updateBackendLastBillNumber,
  importBackendDataToBill,
};
