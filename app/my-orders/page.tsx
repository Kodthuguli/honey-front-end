/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";


import { useState } from "react";
import { api } from "@/lib/api";
import { toast } from "sonner";

import {
  Search,
  Phone,
  ShoppingBag,
  CalendarDays,
  PackageCheck,
  Leaf,
  IndianRupee,
} from "lucide-react";



export default function MyOrdersPage(){


const [phone,setPhone] =
useState("");


const [orders,setOrders] =
useState<any[]>([]);


const [searched,setSearched] =
useState(false);


const [loading,setLoading] =
useState(false);





const fetchOrders =
async()=>{


if(!phone){

toast.info(
"Enter your phone number"
);

return;

}



try{


setLoading(true);


const res =
await api.get(
"/orders/customer",
{
params:{
phone,
},
}
);


setOrders(
res.data || []
);


setSearched(true);



}
catch(error){


console.error(error);


toast.error(
"Unable to find orders"
);


setOrders([]);


}
finally{


setLoading(false);


}


};









return (

<section
className="
min-h-screen

bg-[url('/cart-empty-bg.png')]
bg-cover
bg-center

px-5
py-12
md:py-16
"
>



<div
className="
max-w-6xl
mx-auto
"
>





{/* HEADER */}


<div
className="
text-center
"
>



<div
className="
mx-auto

w-24
h-24

rounded-full

bg-[#F8EAD8]

flex
items-center
justify-center

text-[#C87521]

shadow-sm
"
>


<ShoppingBag
size={45}
/>


</div>





<h1
className="
mt-6

font-serif

text-[42px]
md:text-[60px]

text-[#2E1B12]
"
>

My Orders

</h1>



<p
className="
mt-3

text-[#6F4E37]

max-w-xl
mx-auto
"
>

View your previous Vanamrith purchases and delivered orders

</p>



</div>










{/* SEARCH CARD */}


<div
className="
mt-12

max-w-2xl

mx-auto

bg-white/80

backdrop-blur-sm

border
border-[#E8D9C7]

rounded-[26px]

p-5
md:p-7

shadow-sm
"
>


<div
className="
flex

flex-col
sm:flex-row

gap-4
"
>



<div
className="
relative

flex-1
"
>



<Phone
size={18}

className="
absolute

left-4

top-1/2

-translate-y-1/2

text-[#9B7A5B]
"
/>



<input

value={phone}

onChange={(e)=>
setPhone(
e.target.value
)
}

placeholder="Enter registered phone number"


className="
w-full

h-14

rounded-xl

bg-white

border
border-[#E8D9C7]

pl-12

outline-none

text-[#2E1B12]
"

/>



</div>





<button

disabled={loading}

onClick={fetchOrders}


className="
h-14

px-8

rounded-xl

bg-[#C87521]

text-white

font-medium

flex
items-center
justify-center

gap-2

hover:bg-[#A85F18]

transition
"
>



<Search size={18}/>



{
loading
?
"Searching..."
:
"Find Orders"
}



</button>



</div>


</div>












{/* EMPTY STATE */}


{
searched &&
orders.length===0
&&


<div
className="
mt-16

text-center

bg-white/75

border
border-[#E8D9C7]

rounded-[26px]

max-w-xl

mx-auto

p-10
"
>


<PackageCheck

size={60}

className="
mx-auto

text-[#C87521]
"

/>



<h3
className="
font-serif

text-3xl

text-[#2E1B12]

mt-5
"
>

No Past Orders

</h3>



<p
className="
text-[#6F4E37]

mt-3
"
>

Your delivered orders will appear here.

</p>



</div>


}













{/* ORDERS LIST */}


<div
className="
mt-12

space-y-6
"
>


{
orders.map(
(order)=>(



<div

key={order._id}


className="
bg-white/85

backdrop-blur

border
border-[#E8D9C7]

rounded-[28px]

p-6

shadow-sm
"
>






{/* TOP */}


<div
className="
flex

items-start

justify-between

gap-5

flex-wrap
"
>



<div>


<h2
className="
font-serif

text-2xl

text-[#2E1B12]
"
>


{order.orderNumber}


</h2>




<div
className="
flex
items-center
gap-2

mt-2

text-sm

text-[#6F4E37]
"
>


<CalendarDays size={16}/>


{
new Date(
order.createdAt
)
.toLocaleDateString()
}


</div>



</div>






<div
className="
px-5

py-2

rounded-full

bg-green-100

text-green-700

text-sm

font-medium

flex
items-center

gap-2
"
>


<PackageCheck size={16}/>


Delivered


</div>



</div>









{/* ITEMS */}


<div
className="
mt-7

space-y-4
"
>


{
order.items.map(
(item:any,index:number)=>(


<div

key={index}

className="
flex

justify-between

gap-5

border-b

last:border-none

border-[#E8D9C7]

pb-4
"
>



<div>


<p
className="
font-semibold

text-[#2E1B12]
"
>


{item.name}


</p>



<p
className="
text-sm

text-[#6F4E37]

mt-1
"
>


{item.variant}

{" "}

×


{item.quantity}


</p>



</div>





<div
className="
flex
items-center
gap-1

font-semibold

text-[#C87521]
"
>


<IndianRupee size={16}/>


{item.total}


</div>



</div>


)
)
}



</div>










{/* FOOTER */}


<div
className="
mt-6

flex
items-center

gap-2

text-sm

text-[#6F4E37]
"
>


<Leaf

size={17}

className="
text-[#C87521]
"
/>


Thank you for choosing natural goodness


</div>





</div>



)
)
}



</div>





</div>


</section>

);

}