

import FruitCard from "./FruitCard";

export default function Example1(){
    let Fruits = [
        {
          name: "mango",
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
        {
            name: "banana",
            image: "banana.jpg",
            unit: "doz",
            mrp: 650,
            discount: 17,
            inStock: true,
          },
          {
            name: "Kiwi",
            image: "Kiwi.jpg",
            unit: "doz",
            mrp: 450,
            discount: 0,
            inStock: true,
          },
          {
            name: "dragon",
            image: "dragon.jpg",
            unit: "doz",
            mrp: 600,
            discount: 0,
            inStock: true,
          },
          {
            name: "grapes",
            image: "grapes.jpg",
            unit: "doz",
            mrp: 360,
            discount: 20,
            inStock: true,
          },
          {
            name: "Chikoo",
            image: "Chikoo.jpg",
            unit: "doz",
            mrp: 450,
            discount: 14,
            inStock: true,
          },
      ];

    
    
    return(<>
    {Fruits.map((e,index)=>{

    <FruitCard f={e} key={index}/>
    })}
    



    </>)
}