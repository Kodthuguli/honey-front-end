"use client";


import Link from "next/link";
import { useSearchParams } from "next/navigation";

import {
  XCircle,
  Home,
  RotateCcw,
  ShieldCheck,
  Truck,
  Headphones,
  Leaf,
} from "lucide-react";





export default function OrderFailedPage(){


const params =
useSearchParams();


const orderNumber =
params.get("order");






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
relative

z-10

max-w-[720px]

mx-auto
"
>






{/* MAIN CARD */}


<div
className="
bg-[#FFF8ED]/70

backdrop-blur-sm

border

border-[#D9BE9A]

rounded-[24px]

shadow-[0_25px_60px_rgba(90,55,20,0.15)]

px-6

md:px-16

py-12

text-center
"
>






{/* ICON */}


<div
className="
mx-auto

w-[120px]

h-[120px]

rounded-full

bg-red-50

border

border-red-200


flex

items-center

justify-center
"
>


<XCircle

size={70}

className="
text-red-500
"

/>


</div>








{/* TITLE */}


<h1
className="
mt-8

font-serif

text-[38px]

md:text-[52px]

text-[#2B140A]
"
>

Payment Failed

</h1>








{/* DIVIDER */}


<div
className="
mt-5

flex

items-center

justify-center

gap-5
"
>


<span
className="
w-20

h-px

bg-[#C6A77D]
"
/>


<Leaf

size={20}

className="
text-[#B8862D]
"
/>


<span
className="
w-20

h-px

bg-[#C6A77D]
"
/>


</div>









<p
className="
mt-6

text-lg

text-[#6F4E37]

leading-relaxed
"
>

Your payment was not completed.

<br />

Please try again or choose another payment method.

</p>








{
orderNumber && (

<div
className="
mt-8

bg-white/80

rounded-xl

py-5

shadow-sm
"
>


<p
className="
text-[#6F4E37]
"
>

Order Number

</p>


<h2
className="
text-2xl

font-bold

tracking-wider

text-[#C4622D]
"
>

{orderNumber}

</h2>


</div>

)

}










{/* BUTTONS */}


<div
className="
mt-10

space-y-4
"
>




<Link

href="/cart"

className="
h-[58px]

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


<RotateCcw/>


Try Again


</Link>







<Link

href="/"

className="
h-[58px]

rounded-xl


border

border-[#C4622D]


text-[#3A1F16]


font-semibold

text-lg


flex

items-center

justify-center

gap-3


hover:bg-[#FFF3E5]

transition
"
>


<Home/>


Go to Home


</Link>





</div>





</div>










{/* TRUST STRIP */}



<div
className="
mt-12

bg-[#FFF8ED]/70

backdrop-blur-sm


border

border-[#E5D3B8]


rounded-[20px]


px-8

py-7



grid

grid-cols-1

md:grid-cols-3

gap-8
"
>



{
[


{
icon:<ShieldCheck/>,
title:"Secure Checkout",
desc:"Your data is safe"
},


{
icon:<Leaf/>,
title:"100% Natural",
desc:"Pure & authentic forest honey"
},


{
icon:<Truck/>,
title:"Fast Delivery",
desc:"Quick & reliable shipping"
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
w-12

h-12

rounded-full

bg-[#F4E6D5]


flex

items-center

justify-center


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