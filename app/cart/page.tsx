/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  useEffect,
  useState,
} from "react";
import Link from "next/link";

import { useCartStore } from "@/store/cartStore";
import BuyNowModal from "@/components/checkout/BuyNowModal";
import { api } from "@/lib/api";

import {
  Trash2,
  Minus,
  Plus,
  ShoppingBag,
} from "lucide-react";



export default function CartPage() {


  const [checkoutOpen,setCheckoutOpen] =
  useState(false);

  const [stockIssues,setStockIssues] =
useState<any>({});



  const {

    items,

    removeFromCart,

    increaseQty,

    decreaseQty,

    totalAmount,

    clearCart,

  } = useCartStore();

  useEffect(()=>{


const checkCartStock =
async()=>{


const issues:any = {};



for(
const item of items
){


try{


const res =
await api.get(
`/products/${item.productId}`
);



const product =
res.data;



const variant =
product.variants?.find(
(v:any)=>

(v.title || v.label)
===
item.size

);



const stock =
variant
?
variant.stock
:
product.stock;




if(
stock <= 0
){


issues[
item.productId +
item.size
]
=
"Out of stock";


}



else if(
item.qty > stock
){


issues[
item.productId +
item.size
]
=
`Only ${stock} available`;



}




}
catch{


issues[
item.productId +
item.size
]
=
"Product unavailable";


}


}




setStockIssues(
issues
);



};




if(
items.length > 0
){

checkCartStock();

}



},[items]);

const hasStockIssue =
Object.keys(stockIssues).length > 0;




  if (items.length === 0) {


    return (

      <div
        className="
        min-h-[70vh]
        flex
        flex-col
        items-center
        justify-center
        bg-[#F8F2EA]
        px-5
        "
      >


        <ShoppingBag
          size={70}
          className="text-[#D06F1D]"
        />



        <h1
          className="
          mt-5
          text-3xl
          font-serif
          text-[#2E1B12]
          "
        >

          Your Cart is Empty

        </h1>




        <p className="mt-2 text-[#6F4E37]">

          Add your favourite products.

        </p>





        <Link href="/products">


          <button
            className="
            mt-6
            bg-[#D06F1D]
            text-white
            px-8
            py-3
            rounded-xl
            "
          >

            Continue Shopping

          </button>


        </Link>



      </div>


    );

  }









return (


<div className="bg-[#F8F2EA] min-h-screen">



<div
className="
max-w-7xl
mx-auto
px-5
lg:px-8
py-10
"
>




<h1
className="
text-[38px]
md:text-[52px]
font-serif
text-[#2E1B12]
"
>

Shopping Cart

</h1>







<div
className="
grid
grid-cols-1
lg:grid-cols-[1fr_360px]
gap-8
mt-8
"
>







{/* ITEMS */}

<div className="space-y-5">


{
items.map((item)=>(


<div

key={
item.productId+
item.size
}


className="
bg-[#FFFCF8]
border
border-[#E8D9C7]
rounded-[22px]
p-4
flex
gap-5
"

>



<img

src={item.image || "/placeholder.png"}

alt={item.name}


className="
w-[110px]
h-[110px]
rounded-[16px]
object-cover
bg-white
"

/>







<div className="flex-1">



<h2
className="
text-xl
font-semibold
text-[#2E1B12]
"
>

{item.name}

</h2>





<p className="text-[#6F4E37] mt-1">

Size:
{" "}
{item.size}

</p>

{
stockIssues[
item.productId+
item.size
]
&&
(

<p className="text-red-600 text-sm mt-2">

{
stockIssues[
item.productId+
item.size
]
}

</p>

)
}



<p
className="
mt-3
font-bold
text-[#D06F1D]
text-xl
"
>

₹{item.price}

</p>







{/* QTY */}


<div
className="
mt-4
flex
items-center
gap-4
"
>



<div
className="
flex
border
border-[#E8D9C7]
rounded-xl
overflow-hidden
bg-white
"
>





<button

onClick={()=>
decreaseQty(
item.productId,
item.size
)
}

className="
w-10
h-10
text-[#D06F1D]
flex
items-center
justify-center
"

>

<Minus size={16}/>

</button>






<div
className="
w-12
h-10
border-x
border-[#E8D9C7]
flex
items-center
justify-center
"
>

{item.qty}

</div>







<button


disabled={
!!stockIssues[
item.productId+
item.size
]
}


onClick={()=>
increaseQty(
item.productId,
item.size
)
}


className={`
w-10
h-10
text-[#D06F1D]
flex
items-center
justify-center

${
stockIssues[
item.productId+
item.size
]
?
"opacity-40 cursor-not-allowed"
:
""
}

`}

>

<Plus size={16}/>

</button>




</div>







<button

onClick={()=>
removeFromCart(
item.productId,
item.size
)
}

className="
text-red-500
"

>

<Trash2 size={20}/>

</button>




</div>





</div>








<div
className="
hidden
md:block
font-semibold
text-xl
text-[#2E1B12]
"
>


₹{item.price * item.qty}


</div>





</div>


))

}


</div>










{/* SUMMARY */}


<div
className="
bg-[#FFFCF8]
border
border-[#E8D9C7]
rounded-[24px]
p-6
h-fit
"
>




<h2
className="
text-2xl
font-semibold
text-[#2E1B12]
"
>

Order Summary

</h2>





<div className="mt-6 space-y-4">


<Row

label="Subtotal"

value={`₹${totalAmount()}`}

/>





<Row

label="Shipping"

value="Calculated later"

/>





<hr/>





<Row

label="Total"

value={`₹${totalAmount()}`}

bold

/>





</div>








<button


disabled={
hasStockIssue
}


onClick={()=>
setCheckoutOpen(true)
}

className={`
mt-8
w-full
h-[54px]
rounded-[14px]
text-white
font-semibold

${
hasStockIssue
?
"bg-gray-400 cursor-not-allowed"
:
"bg-[#D06F1D]"
}

`}

>

{
hasStockIssue
?
"Update Cart"
:
"Checkout"
}

</button>





</div>





</div>





</div>








{/* CHECKOUT MODAL */}


<BuyNowModal


isOpen={checkoutOpen}


onClose={()=>
setCheckoutOpen(false)
}


cartItems={items}


onSuccess={()=>{


clearCart();


}}


/>





</div>


);

}









function Row({
label,
value,
bold
}:any){


return (

<div
className="
flex
justify-between
"
>



<span className="text-[#6F4E37]">

{label}

</span>





<span
className={
bold
?
"text-xl font-bold text-[#2E1B12]"
:
"text-[#2E1B12]"
}
>


{value}


</span>



</div>

);

}