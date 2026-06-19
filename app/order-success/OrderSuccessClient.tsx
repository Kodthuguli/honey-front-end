"use client";


import Link from "next/link";

import { useSearchParams } from "next/navigation";

import {
  CheckCircle,
  PackageSearch,
  Home,
} from "lucide-react";





export default function OrderSuccessClient(){



const params =
useSearchParams();



const orderNumber =
params.get("order");





return (


<section
className="
relative

min-h-screen

flex

items-center

justify-center

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





{/* CONTENT CARD */}


<div
className="
relative

z-10

w-full

max-w-[620px]

rounded-[26px]

border

border-[#D8BE9A]


bg-[#FFF8ED]/70

backdrop-blur-sm


shadow-[0_25px_60px_rgba(74,45,20,0.18)]


px-6

md:px-14

py-12

text-center
"
>





{/* SUCCESS ICON */}


<div
className="
mx-auto

w-[105px]

h-[105px]

rounded-full

bg-[#EEF4DF]

flex

items-center

justify-center


shadow-inner
"
>


<CheckCircle

size={72}

strokeWidth={2.2}

className="
text-green-600
"

/>


</div>









{/* TITLE */}


<h1
className="
mt-10

font-serif

text-[34px]

md:text-[46px]

leading-tight

text-[#2B140A]
"
>


Order Confirmed 🎉


</h1>






<p
className="
mt-4

text-[17px]

md:text-[19px]

text-[#6F4E37]
"
>

Thank you for choosing Vanamrith

</p>










{/* ORDER NUMBER */}


<div
className="
mt-8

bg-white/80

rounded-xl

shadow-sm

border

border-[#EFE2CF]


py-5

px-5
"
>



<p
className="
text-[#3A1F16]

text-[16px]
"
>

Order Number

</p>



<h2
className="
mt-2

text-[26px]

tracking-[3px]

font-bold

text-[#C4622D]
"
>


{orderNumber}


</h2>



</div>









{/* BUTTONS */}



<div
className="
mt-9

space-y-4
"
>





<Link

href="/track-order"


className="
h-[58px]

rounded-xl

bg-[#C4622D]

text-white


flex

items-center

justify-center

gap-3


font-semibold

text-[18px]


hover:bg-[#A94F1E]

transition
"
>



<PackageSearch size={24}/>



Track Order



</Link>









<Link

href="/"


className="
h-[58px]

rounded-xl


border

border-[#C4622D]


text-[#3A1F16]


flex

items-center

justify-center

gap-3


font-semibold

text-[18px]


bg-white/30


hover:bg-[#FFF3E5]

transition
"
>


<Home size={24}/>


Continue Shopping



</Link>





</div>







</div>





</section>


);


}