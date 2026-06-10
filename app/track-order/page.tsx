/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";


import { useState } from "react";
import { api } from "@/lib/api";
import {
 PackageCheck,
 Truck,
 Search,
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

alert(
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

<div
className="
min-h-screen
bg-[#FFF9F2]
px-5
py-16
"
>


<div
className="
max-w-3xl
mx-auto
"
>



<h1
className="
text-4xl
font-serif
text-center
text-[#3A1F16]
"
>

Track Your Order

</h1>



<p
className="
text-center
text-[#6F4E37]
mt-3
"
>

Check your Vanamrith order status

</p>









{/* SEARCH BOX */}

<div
className="
mt-10
bg-[#F4E6D5]
border
border-[#C6A77D]
rounded-xl
p-6
space-y-4
"
>


<input

value={orderNumber}

onChange={(e)=>
setOrderNumber(
e.target.value
)
}

placeholder="Order Number (Example VAN10001)"

className="
w-full
p-3
rounded-md
bg-white
border
"

/>



<input

value={phone}

onChange={(e)=>
setPhone(
e.target.value
)
}

placeholder="Phone Number"

className="
w-full
p-3
rounded-md
bg-white
border
"

/>




<button

onClick={trackOrder}

disabled={loading}

className="
w-full
bg-[#C4622D]
text-white
py-3
rounded-md
flex
items-center
justify-center
gap-2
"

>


<Search size={18}/>


{
loading
?
"Checking..."
:
"Track Order"
}


</button>


</div>









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
bg-white
rounded-xl
shadow
p-6
space-y-6
"
>



<div
className="
flex
items-center
gap-3
"
>


<PackageCheck
className="
text-green-600
"
/>


<div>


<h2
className="
font-bold
text-xl
"
>

{order.orderNumber}

</h2>


<p>

Status:
{" "}
<b>

{order.status}

</b>


</p>



</div>


</div>










<div>


<h3 className="font-semibold mb-3">

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
py-2
"
>


<span>

{item.name}

(
{item.variant}
)

x {item.quantity}

</span>



<span>

₹{item.total}

</span>


</div>


)
)
}


</div>









<div>


<h3 className="font-semibold">

Payment

</h3>


<p>

{
order.payment?.status
}

</p>


</div>










{
order.shipping?.trackingId
&&
(

<div
className="
bg-[#FFF9F2]
border
rounded-lg
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

Courier:
{" "}
{order.shipping.provider}

</p>



<p>

Tracking:
{" "}
{order.shipping.trackingId}

</p>




{
order.shipping.trackingUrl
&&
(

<a

href={
order.shipping.trackingUrl
}

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



</div>


</div>

);


}