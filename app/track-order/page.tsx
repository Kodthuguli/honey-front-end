/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";


import { useState } from "react";
import { api } from "@/lib/api";
import {
 PackageCheck,
 Truck,
 Search,
} from "lucide-react";
import { toast } from "sonner";
import {
 ShieldCheck,
 Clock,
 Headphones,
 Box,
 Phone,
 Leaf,
} from "lucide-react";



export default function TrackOrderPage(){


const [orderNumber,setOrderNumber] =
useState("");


const [phone,setPhone] =
useState("");


const [order,setOrder] =
useState<any>(null);


const [loading,setLoading] =
useState(false);


const [error,setError] =
useState("");





const trackOrder =
async()=>{


if(
!orderNumber ||
!phone
){

toast.info(
"Enter order number and phone"
);

return;

}



try{


setLoading(true);

setError("");

setOrder(null);




const res =
await api.get(
"/orders/track",
{
params:{

orderNumber,

phone,

}

}
);




if(!res.data){

setError(
"Order not found"
);

return;

}



setOrder(
res.data
);



}
catch(err){


console.error(err);


setError(
"Unable to find order"
);


}
finally{


setLoading(false);


}


};








return (

<section
className="
relative
min-h-screen

px-5

py-20

overflow-hidden
"
style={{

backgroundImage:
"url('/cart-empty-bg.png')",

backgroundSize:
"cover",

backgroundPosition:
"center",

backgroundRepeat:
"no-repeat",

}}
>




<div
className="
max-w-[900px]

mx-auto

relative

z-10
"
>





{/* ICON */}


<div
className="
mx-auto

w-[110px]

h-[110px]

rounded-full

bg-[#F5E8D4]

flex

items-center

justify-center

shadow-sm
"
>

<Box
size={55}
className="
text-[#C4622D]
"
/>

</div>








{/* HEADING */}


<h1
className="
mt-8

font-serif

text-center

text-[42px]

md:text-[60px]

text-[#2B140A]
"
>

Track Your Order

</h1>




<div
className="
mt-4

flex

items-center

justify-center

gap-5
"
>


<span
className="
w-24

h-px

bg-[#C6A77D]
"
/>


<Leaf
size={22}

className="
text-[#B8862D]
"
/>


<span
className="
w-24

h-px

bg-[#C6A77D]
"
/>


</div>






<p
className="
mt-5

text-center

text-lg

text-[#6F4E37]
"
>

Check your Vanamrith order status in real time.

</p>











{/* SEARCH BOX */}


<div
className="
mt-10

bg-[#FFF8ED]/70

backdrop-blur-sm

border

border-[#D9BE9A]

rounded-[18px]

shadow-[0_20px_45px_rgba(90,55,20,0.12)]


p-6

md:p-10


space-y-5
"
>






{/* ORDER INPUT */}


<div
className="
relative
"
>


<Box
size={20}

className="
absolute

left-5

top-1/2

-translate-y-1/2

text-[#9B7A52]
"
/>



<input

value={orderNumber}

onChange={(e)=>
setOrderNumber(e.target.value)
}

placeholder="Order Number (Example VAN10001)"


className="
w-full

h-[58px]

rounded-xl

border

border-[#D8C5AA]

bg-white/80


pl-14

pr-5


outline-none


focus:border-[#C4622D]
"

/>


</div>









{/* PHONE */}



<div
className="
relative
"
>


<Phone

size={20}

className="
absolute

left-5

top-1/2

-translate-y-1/2

text-[#9B7A52]
"

/>



<input

value={phone}

onChange={(e)=>{

const value =
e.target.value.replace(/\D/g,"");

if(value.length<=10)
setPhone(value);

}}

placeholder="Phone Number"


className="
w-full

h-[58px]

rounded-xl

border

border-[#D8C5AA]

bg-white/80


pl-14

pr-5


outline-none


focus:border-[#C4622D]
"

/>


</div>









<button

onClick={trackOrder}

disabled={loading}


className="
w-full

h-[62px]

rounded-xl


bg-[#C4622D]

text-white


font-semibold

text-lg


flex

items-center

justify-center

gap-3


hover:bg-[#A94F1E]

transition
"
>


<Search size={22}/>


{
loading
?
"Checking..."
:
"Track Order"
}



</button>



</div>









{/* ERROR */}


{
error && (

<p
className="
text-red-600

text-center

mt-5
"
>

{error}

</p>

)
}









{/* RESULT */}


{
order && (


<div
className="
mt-10

bg-[#FFF8ED]/80

border

border-[#D9BE9A]

rounded-[20px]

p-6

shadow-lg

space-y-6
"
>





<div
className="
flex

items-center

gap-4
"
>


<PackageCheck
size={40}
className="
text-green-600
"
/>



<div>


<h2
className="
font-bold

text-xl

text-[#2B140A]
"
>

{order.orderNumber}

</h2>



<p className="text-[#6F4E37]">

Status:

{" "}

<b>

{order.status}

</b>

</p>


</div>


</div>








<div>


<h3
className="
font-semibold

mb-3
"
>

Products

</h3>


{
order.items.map(
(item:any,index:number)=>(


<div

key={index}

className="
flex

justify-between

border-b

border-[#E4D0B5]

py-3
"
>


<span>

{item.name}

{" "}

({item.variant})

{" "}

x {item.quantity}

</span>



<span>

₹{item.total}

</span>


</div>


))
}


</div>









<div>


<h3 className="font-semibold">

Payment

</h3>


<p>

{order.payment?.status}

</p>


</div>










{
order.shipping?.trackingId && (


<div
className="
bg-white/60

border

rounded-xl

p-4
"
>


<div
className="
flex

gap-2

items-center

font-semibold
"
>

<Truck size={18}/>

Shipping

</div>


<p>
Courier: {order.shipping.provider}
</p>


<p>
Tracking: {order.shipping.trackingId}
</p>



{
order.shipping.trackingUrl && (

<a

href={order.shipping.trackingUrl}

target="_blank"

className="
text-[#C4622D]

underline
"
>

Track Shipment

</a>

)

}


</div>


)

}



</div>


)

}









{/* TRUST STRIP */}



<div
className="
mt-14

grid

grid-cols-1

md:grid-cols-3

gap-8


text-center

md:text-left
"
>


{
[

{
icon:<ShieldCheck/>,
title:"Secure & Private",
desc:"Your information is always protected"
},


{
icon:<Clock/>,
title:"Real-time Updates",
desc:"Get the latest status of your order"
},


{
icon:<Headphones/>,
title:"Need Help?",
desc:"Our support team is always here for you"
}


].map((item)=>(


<div

key={item.title}

className="
flex

items-center

justify-center

md:justify-start

gap-4
"
>


<div
className="
text-[#C4622D]
"
>

{item.icon}

</div>


<div>

<p
className="
font-semibold
text-[#2B140A]
"
>

{item.title}

</p>


<p
className="
text-sm
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



</section>


);


}