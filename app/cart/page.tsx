/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";
import Image from "next/image";

import { useCartStore } from "@/store/cartStore";
import BuyNowModal from "@/components/checkout/BuyNowModal";
import { api } from "@/lib/api";

import {
  Trash2,
  Minus,
  Plus,
  ShoppingBag,
  ArrowRight,
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






/* ================= STOCK CHECK ================= */

useEffect(()=>{


const checkCartStock =
async()=>{


const issues:any={};



for(const item of items){


try{


const res =
await api.get(
`/products/${item.productId}`
);


const product=res.data;



const stock =
product.stock;



if(stock<=0){


issues[
item.productId+item.size
]
=
"Out of stock";


}


else if(item.qty>stock){


issues[
item.productId+item.size
]
=
`Only ${stock} available`;

}


}

catch{


issues[
item.productId+item.size
]
=
"Product unavailable";


}


}



setStockIssues(issues);


};



if(items.length){

checkCartStock();

}



},[items]);



const hasStockIssue =
Object.keys(stockIssues).length>0;







/* ================= EMPTY CART ================= */


if(items.length===0){

return (

<div
className="
relative
min-h-screen
overflow-hidden
bg-[#F8F1E6]
"
>


{/* BACKGROUND IMAGE */}


<Image

src="/cart-empty-bg.png"

alt="Vanamrith Honey Background"

fill

priority

sizes="100vw"

className="
object-cover
object-center
z-0
"

/>





{/* CONTENT */}


<div
className="
relative
z-10

min-h-[720px]

flex
flex-col
items-center
justify-center

px-5

text-center
"
>




<div
className="
w-24
h-24

rounded-full

bg-[#F2DEB8]/80

backdrop-blur-sm

flex
items-center
justify-center

mb-8
"
>


<ShoppingBag

size={42}

strokeWidth={1.5}

className="
text-[#C87819]
"

/>


</div>







<h1
className="
font-serif

text-[42px]
md:text-[64px]

tracking-wide

text-[#2B140A]
"
>

Your Cart is Empty

</h1>







<p
className="
mt-5

text-[17px]
md:text-xl

text-[#5B4636]
"
>

Looks like you haven’t added anything yet.

</p>




<p
className="
mt-3

text-[17px]
md:text-xl

text-[#5B4636]
"
>

Explore our natural honey and bring home the goodness of nature.

</p>






<Link href="/products">


<button
className="
mt-10

h-[58px]

px-12

rounded-[14px]

bg-[#C66A12]

text-white

font-semibold

tracking-wide

flex
items-center
gap-3

hover:bg-[#5A2815]

transition
"
>

Continue Shopping


<ArrowRight size={20}/>


</button>


</Link>



</div>









{/* FEATURE STRIP */}


<div
className="
relative
z-20

max-w-6xl

mx-auto

-mt-20

px-5
"
>


<div
className="
bg-white/70

backdrop-blur-md

border
border-white/60

rounded-[22px]

shadow-[0_15px_40px_rgba(60,40,20,0.18)]

grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4

overflow-hidden
"
>



{


[

{
img:"/leaf.png",
title:"100% Natural",
desc:"Pure & authentic forest honey"
},

{
img:"/Ljar.png",
title:"Raw & Unprocessed",
desc:"No additives, no processing"
},

{
img:"/forest.png",
title:"Sourced From Forests",
desc:"Ethically collected"
},

{
img:"/Lbee.png",
title:"Rich in Nutrients",
desc:"Packed with natural goodness"
}


].map((item)=>(



<div

key={item.title}

className="
flex

items-center

gap-5

px-8
py-8

border-b
lg:border-b-0
lg:border-r

border-[#E5D6BE]

last:border-0
"
>



<Image

src={item.img}

alt={item.title}

width={52}

height={52}

className="
object-contain
"

/>




<div>


<h4
className="
font-semibold

text-[#3A1F16]
"
>

{item.title}

</h4>



<p
className="
text-sm

mt-1

leading-relaxed

text-[#6F4E37]
"
>

{item.desc}

</p>


</div>


</div>


))

}


</div>


</div>








{/* BOTTOM QUOTE */}


<div
className="
relative
z-20

text-center

mt-12

pb-14
"
>


<p
className="
font-serif

text-2xl

text-[#3A1F16]
"
>

Taste the purity. Feel the nature.

</p>



<div
className="
mt-5

flex

justify-center

items-center

gap-5

text-[#C49A2C]
"
>


<span className="w-16 h-px bg-[#C49A2C]" />


🌿


<span className="w-16 h-px bg-[#C49A2C]" />


</div>


</div>




</div>

);


}










/* ================= CART PAGE ================= */


return (

<div
className="
relative
min-h-screen
overflow-hidden
bg-[#F8F1E6]
"
>


{/* BACKGROUND */}

<Image

src="/cart-empty-bg.png"

alt="Honey Background"

fill

priority

sizes="100vw"

className="
object-cover
object-center
z-0
"

/>






<div
className="
relative
z-10

max-w-7xl

mx-auto

px-5
lg:px-8

pt-20
pb-20
"
>





{/* TITLE */}


<div
className="
mb-12
"
>


<h1
className="
font-serif

text-[42px]
md:text-[60px]

tracking-wide

text-[#2B140A]
"
>

Shopping Cart

</h1>



<div
className="
mt-5

flex

items-center

gap-5
text-[#B88A34]
"
>


<span className="w-28 h-px bg-[#B88A34]" />

🌿

<span className="w-28 h-px bg-[#B88A34]" />


</div>


</div>








{/* CART CONTENT */}


<div
className="
grid

grid-cols-1

lg:grid-cols-[1fr_420px]

gap-10

items-start
"
>








{/* LEFT PRODUCTS */}


<div className="space-y-6">



{
items.map((item)=>(



<div

key={
item.productId+
item.size
}


className="
bg-white/65

backdrop-blur-md

border
border-[#E8D9C7]

rounded-[26px]

shadow-[0_15px_35px_rgba(60,40,20,0.12)]

p-6


grid

grid-cols-1

md:grid-cols-[220px_1fr_150px]

gap-8

items-center
"
>






{/* IMAGE */}


<div
className="
relative

w-full
md:w-[220px]

h-[190px]

rounded-[18px]

overflow-hidden

bg-white
"
>



<Image

src={
item.image ||
"/placeholder.png"
}

alt={item.name}

fill

sizes="220px"

className="
object-cover
"

/>


</div>









{/* INFO */}


<div>


<h2
className="
font-serif

text-[28px]

text-[#2B140A]
"
>

{item.name}

</h2>




<p
className="
mt-2

text-[#6F4E37]
"
>

Size : {item.size}

</p>






{
stockIssues[
item.productId+item.size
]
&&

<p
className="
text-red-600
text-sm
mt-2
"
>

{
stockIssues[
item.productId+item.size
]
}

</p>

}






<p
className="
mt-4

text-[26px]

font-bold

text-[#C66A12]
"
>

₹{item.price}

</p>









{/* QTY */}


<div
className="
mt-7

inline-flex

border
border-[#D7C6AA]

rounded-lg

overflow-hidden
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
w-14
h-11
flex
items-center
justify-center
"
>

<Minus size={16}/>

</button>





<div
className="
w-16
h-11

border-x

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
item.productId+item.size
]
}

onClick={()=>
increaseQty(
item.productId,
item.size
)
}

className="
w-14
h-11

flex

items-center

justify-center
"
>

<Plus size={16}/>

</button>




</div>



</div>








{/* PRICE + DELETE */}


<div
className="
md:border-l

border-[#D7C6AA]

h-full

flex
md:flex-col

items-center

justify-between

md:pl-10
"
>



<p
className="
font-semibold

text-[26px]

text-[#2B140A]
"
>

₹{item.price*item.qty}

</p>





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

<Trash2 size={22}/>

</button>



</div>




</div>


))

}



</div>









{/* ORDER SUMMARY */}



<div
className="
bg-white/70

backdrop-blur-md

border

border-[#E8D9C7]


rounded-[28px]


shadow-[0_15px_40px_rgba(60,40,20,0.15)]


p-8


sticky

top-28
"
>



<h2
className="
font-serif

text-[34px]

text-[#2B140A]
"
>

Order Summary

</h2>




<div
className="
my-5

flex

items-center

gap-4
text-[#B88A34]
"
>


<span className="w-20 h-px bg-[#B88A34]" />

🌿

<span className="w-20 h-px bg-[#B88A34]" />


</div>





<div className="space-y-5">


<Row
label="Subtotal"
value={`₹${totalAmount()}`}
/>


<Row
label="Shipping"
value="Calculated later"
/>


<hr className="border-[#D7C6AA]" />



<Row

label="Total"

value={`₹${totalAmount()}`}

bold

/>


</div>







<button

disabled={hasStockIssue}

onClick={()=>
setCheckoutOpen(true)
}

className={`
mt-10

w-full

h-[58px]

rounded-xl

text-white

font-semibold

${
hasStockIssue
?
"bg-gray-400"
:
"bg-[#C66A12]"
}

`}
>

{
hasStockIssue
?
"Update Cart"
:
"Proceed to Checkout →"
}

</button>



<p
className="
text-center
mt-5
text-[#6F4E37]
text-sm
"
>

🛡 Secure Checkout

</p>



</div>




</div>








{/* FEATURE STRIP */}


<div
className="
mt-20

bg-white/65

backdrop-blur-md

border

border-[#E8D9C7]

rounded-[26px]


shadow-lg


grid

grid-cols-1

sm:grid-cols-2

lg:grid-cols-4

overflow-hidden
"
>



{
[
{
img:"/leaf.png",
title:"100% Natural",
desc:"Pure & authentic forest honey"
},

{
img:"/Ljar.png",
title:"Raw & Unprocessed",
desc:"No additives, no processing"
},

{
img:"/forest.png",
title:"Sourced From Forests",
desc:"Ethically collected"
},

{
img:"/Lbee.png",
title:"Rich in Nutrients",
desc:"Packed with natural goodness"
}

].map((item)=>(



<div

key={item.title}

className="
flex
items-center
gap-5

px-8
py-8

border-r
last:border-r-0

border-[#E5D6BE]
"
>



<Image

src={item.img}

alt={item.title}

width={52}

height={52}
/>



<div>


<h4 className="font-semibold">

{item.title}

</h4>


<p className="text-sm text-[#6F4E37]">

{item.desc}

</p>


</div>


</div>


))

}


</div>





</div>






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

<div className="flex justify-between">


<span className="text-[#6F4E37]">

{label}

</span>


<span
className={
bold
?
"text-xl font-bold text-[#2B140A]"
:
"text-[#2B140A]"
}
>

{value}

</span>


</div>

);

}