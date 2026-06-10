/* eslint-disable @typescript-eslint/no-explicit-any */

import { create } from "zustand";
import { persist } from "zustand/middleware";


export type CartItem = {

  productId: string;

  name: string;

  image: string;

  size: string;

  price: number;

  qty: number;

};



type CartStore = {


  items: CartItem[];



  addToCart: (
    item: CartItem
  ) => void;



  removeFromCart: (
    productId:string,
    size:string
  ) => void;



  increaseQty: (
    productId:string,
    size:string
  ) => void;



  decreaseQty: (
    productId:string,
    size:string
  ) => void;



  clearCart:()=>void;



  totalItems:()=>number;



  totalAmount:()=>number;


};





export const useCartStore =
create<CartStore>()(

persist(

(set,get)=>({



items:[],





/* =========================
   ADD TO CART
========================= */

addToCart:(item)=>{


const existing =
get().items.find(

(cartItem)=>

cartItem.productId === item.productId &&
cartItem.size === item.size

);



if(existing){


set({

items:

get().items.map(

(cartItem)=>


cartItem.productId === item.productId &&
cartItem.size === item.size


?

{
...cartItem,

qty:
cartItem.qty + item.qty

}


:

cartItem


)

});


return;


}




set({

items:[
...get().items,
item
]

});



},







/* =========================
   REMOVE
========================= */


removeFromCart:
(productId,size)=>{


set({

items:

get().items.filter(

item=>

!(

item.productId === productId &&
item.size === size

)

)

});



},








/* =========================
   INCREASE
========================= */


increaseQty:
(productId,size)=>{


set({

items:

get().items.map(

item=>


item.productId === productId &&
item.size === size

?

{
...item,
qty:item.qty+1
}


:

item


)

});



},









/* =========================
   DECREASE
========================= */


decreaseQty:
(productId,size)=>{


set({

items:

get().items.map(

item=>


item.productId === productId &&
item.size === size


?

{
...item,

qty:
Math.max(
1,
item.qty-1
)

}


:

item


)

});



},









/* =========================
   CLEAR CART
========================= */


clearCart:()=>{


set({
items:[]
});


},









/* =========================
   TOTAL ITEMS
========================= */


totalItems:()=>{


return get()
.items
.reduce(

(total,item)=>

total + item.qty,

0

);


},









/* =========================
   TOTAL AMOUNT
========================= */


totalAmount:()=>{


return get()
.items
.reduce(

(total,item)=>

total +
item.price * item.qty,

0

);


}




}),


{
name:"vanamrith-cart"
}


)

);