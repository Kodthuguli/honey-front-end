"use client";


import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
 XCircle,
 Home,
 RotateCcw,
} from "lucide-react";



export default function OrderFailedPage(){


const params =
useSearchParams();


const orderNumber =
params.get("order");



return (

<div
className="
min-h-screen
bg-[#FFF9F2]
flex
items-center
justify-center
px-5
"
>


<div
className="
bg-[#F4E6D5]
border
border-[#C6A77D]
rounded-2xl
p-10
max-w-lg
text-center
"
>


<XCircle
size={70}
className="
text-red-600
mx-auto
"
/>



<h1
className="
text-3xl
font-serif
mt-5
"
>

Payment Failed

</h1>



<p className="mt-3">

Your payment was not completed.

</p>




{
orderNumber &&

<p className="mt-5">

Order:
<b>
 {orderNumber}
</b>

</p>

}





<div className="mt-8 space-y-3">


<Link

href="/cart"

className="
bg-[#C4622D]
text-white
py-3
rounded-md
flex
justify-center
gap-2
"

>


<RotateCcw/>

Try Again


</Link>




<Link

href="/"

className="
border
py-3
rounded-md
flex
justify-center
gap-2
"

>

<Home/>

Home

</Link>


</div>



</div>


</div>

);


}