"use client";


import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
 CheckCircle,
 PackageSearch,
 Home,
} from "lucide-react";



export default function OrderSuccessPage(){


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
w-full
text-center
shadow
"
>


<CheckCircle
size={70}
className="
text-green-600
mx-auto
"
/>



<h1
className="
text-3xl
font-serif
text-[#3A1F16]
mt-5
"
>

Order Confirmed 🎉

</h1>



<p
className="
text-[#6F4E37]
mt-3
"
>

Thank you for choosing Vanamrith

</p>





<div
className="
bg-white
rounded-lg
p-4
mt-6
"
>


<p className="text-sm">

Order Number

</p>



<h2
className="
text-xl
font-bold
text-[#C4622D]
"
>

{orderNumber}

</h2>


</div>





<div
className="
flex
flex-col
gap-3
mt-8
"
>


<Link

href="/track-order"

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


<PackageSearch/>


Track Order


</Link>






<Link

href="/"

className="
border
border-[#C4622D]
text-[#3A1F16]
py-3
rounded-md
flex
justify-center
gap-2
"

>


<Home/>


Continue Shopping


</Link>


</div>



</div>


</div>

);


}