import "./App.css";
import Assi59Card from "./Assi59Card";

export default function Assi59() {
  let fruits = [
    {
      name: "Mango",
      image: "mango.jpg",
      unit: "doz",
      mrp: 500,
      discount: 8,
      inStock: true,
    },
    {
      name: "Papaya",
      image: "pineapple.jpg",
      unit: "kg",
      mrp: 80,
      discount: 0,
      inStock: false,
    },
  ];
  return (
    <>
      {fruits.map((e, index) => (
        <Assi59Card f={e} key={index} />
      ))}
    </>
  );
}
